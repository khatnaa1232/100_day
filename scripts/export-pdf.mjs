import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFileSync, existsSync, mkdirSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const outDir = '/tmp/slide_export';
const pdfPath = join(__dirname, '..', 'slides.pdf');

const MIME = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
};

function serve(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let url = req.url.split('?')[0];
      let filePath = join(distDir, url === '/' ? '/index.html' : url);
      if (!existsSync(filePath)) filePath = join(distDir, 'index.html');
      const ext = extname(filePath);
      res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
      try { res.end(readFileSync(filePath)); } catch { res.writeHead(404); res.end(); }
    });
    server.listen(port, () => resolve(server));
  });
}

function pngToDataUri(path) {
  const data = readFileSync(path);
  return `data:image/png;base64,${data.toString('base64')}`;
}

const TOTAL = 17;
const WIDTH = 1920;
const HEIGHT = 1028;
const PDF_WIDTH_MM = 320;
const PDF_HEIGHT_MM = (PDF_WIDTH_MM * HEIGHT) / WIDTH;
// Wait after each navigation for animations to complete
const NAV_WAIT = 4000;
const BROWSER_CANDIDATES = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
];

const executablePath = BROWSER_CANDIDATES.find((candidate) => existsSync(candidate));

if (!executablePath) {
  throw new Error(`No supported browser found. Checked: ${BROWSER_CANDIDATES.join(', ')}`);
}

const server = await serve(7791);
console.log('Server on http://localhost:7791');

const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewportSize({ width: WIDTH, height: HEIGHT });
await page.goto('http://localhost:7791', { waitUntil: 'networkidle', timeout: 30000 });

// Hide only the navigation control bar using its specific Tailwind classes
await page.addStyleTag({
  content: `
    /* Hide slide navigation bar only */
    [class*="bottom-5"][class*="left-1\\/2"],
    [class*="bottom-5"][class*="left-1/2"] {
      display: none !important;
    }
  `
});

// Wait for initial slide animations
await page.waitForTimeout(NAV_WAIT);

// Give keyboard focus
await page.mouse.click(WIDTH / 2, HEIGHT / 2);
await page.waitForTimeout(200);

const screenshotPaths = [];
mkdirSync(outDir, { recursive: true });

for (let i = 0; i < TOTAL; i++) {
  if (i > 0) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(NAV_WAIT);
  }

  const path = join(outDir, `slide-${String(i + 1).padStart(2, '0')}.png`);
  await page.screenshot({ path, fullPage: false });
  screenshotPaths.push(path);

  const size = readFileSync(path).length;
  console.log(`Slide ${i + 1}/${TOTAL} captured — ${(size / 1024).toFixed(0)} KB`);
}

console.log('Generating PDF...');

const pdfPage = await browser.newPage();
await pdfPage.setViewportSize({ width: WIDTH, height: HEIGHT });
const screenshotUris = screenshotPaths.map((path) => pngToDataUri(path));
await pdfPage.setContent(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <style>
        @page { size: ${PDF_WIDTH_MM}mm ${PDF_HEIGHT_MM}mm; margin: 0; }
        html, body { margin: 0; padding: 0; background: #06163d; }
        .slide { width: ${PDF_WIDTH_MM}mm; height: ${PDF_HEIGHT_MM}mm; page-break-after: always; break-after: page; }
        .slide:last-child { page-break-after: auto; break-after: auto; }
        img { display: block; width: 100%; height: 100%; object-fit: cover; }
      </style>
    </head>
    <body>
      ${screenshotUris.map((uri) => `<div class="slide"><img src="${uri}" /></div>`).join('')}
    </body>
  </html>
`, { waitUntil: 'load' });
await pdfPage.pdf({
  path: pdfPath,
  printBackground: true,
  width: `${PDF_WIDTH_MM}mm`,
  height: `${PDF_HEIGHT_MM}mm`,
  margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
});
await pdfPage.close();
await browser.close();
server.close();
console.log(`PDF saved: ${pdfPath}`);

for (const p of screenshotPaths) {
  try { execFileSync('rm', [p]); } catch {}
}
console.log('Done!');
