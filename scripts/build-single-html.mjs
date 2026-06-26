import { readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, extname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const distDir = join(root, 'dist');
const inputPath = join(distDir, 'index.html');
const outputPath = join(root, 'slides.html');

const mimeTypes = {
  '.css': 'text/css',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function assetPath(url, fromDir = distDir) {
  const cleanUrl = url.split(/[?#]/, 1)[0];
  return cleanUrl.startsWith('/')
    ? join(distDir, cleanUrl.replace(/^\/+/, ''))
    : resolve(fromDir, cleanUrl);
}

async function asDataUri(url, fromDir = distDir) {
  const path = assetPath(url, fromDir);
  const mime = mimeTypes[extname(path).toLowerCase()] ?? 'application/octet-stream';
  const data = await readFile(path);
  return `data:${mime};base64,${data.toString('base64')}`;
}

async function inlineCssAssets(css, cssPath) {
  const matches = [...css.matchAll(/url\((['"]?)(?!data:|https?:|#)([^)'"]+)\1\)/g)];
  for (const match of matches) {
    const dataUri = await asDataUri(match[2], dirname(cssPath));
    css = css.replace(match[0], `url("${dataUri}")`);
  }
  return css;
}

let html = await readFile(inputPath, 'utf8');

const stylesheetMatches = [...html.matchAll(/<link\b[^>]*href=["']([^"']+\.css)["'][^>]*>/g)];
for (const match of stylesheetMatches) {
  const cssPath = assetPath(match[1]);
  const css = await inlineCssAssets(await readFile(cssPath, 'utf8'), cssPath);
  html = html.replace(match[0], () => `<style>${css}</style>`);
}

const scriptMatches = [...html.matchAll(/<script\b([^>]*)src=["']([^"']+\.js)["']([^>]*)><\/script>/g)];
for (const match of scriptMatches) {
  let js = await readFile(assetPath(match[2]), 'utf8');
  const assetMatches = [...js.matchAll(/(["'`])(\/assets\/[^"'`]+\.(?:gif|jpe?g|png|svg|webp|woff2?))\1/g)];
  for (const assetMatch of assetMatches) {
    const dataUri = await asDataUri(assetMatch[2]);
    js = js.replaceAll(assetMatch[2], dataUri);
  }
  html = html.replace(match[0], () => `<script type="module">${js}</script>`);
}

await writeFile(outputPath, html);
console.log(`Created ${basename(outputPath)}`);
