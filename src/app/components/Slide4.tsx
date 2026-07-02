import { useEffect, useRef, type CSSProperties } from 'react';
import * as THREE from 'three';
import slide21Img from '../../imports/slide_2_1.jpg';
import slide22Img from '../../imports/slide_2_2.jpg';
import slide23Img from '../../imports/slide_2_3.jpg';
import slide24Img from '../../imports/slide_2_4.png';
import slide25Img from '../../imports/slide_2_5.jpg';
import slide26Img from '../../imports/slide_2_6.png';

const IMAGES = [slide21Img, slide22Img, slide23Img, slide24Img, slide25Img, slide26Img];

// Top-center calendar header — order: 100 ЧӨЛӨӨЛӨЛТ → 100 ӨДӨР → ОНЦЛОХ 12
const calTiles = [
  { num: '100', label: 'ЧӨЛӨӨЛӨЛТ', accent: '#2ec5ff', glow: 'rgba(46,197,255,0.5)' },
  { num: '100', label: 'ӨДӨР', accent: '#f2b94b', glow: 'rgba(242,185,75,0.45)' },
  { num: '20', label: 'ОНЦЛОХ', accent: '#22c55e', glow: 'rgba(34,197,94,0.45)' },
];

// Curved-slider options (from the reference: speed/gap/curve/direction)
const OPTIONS = { gap: 10, curve: 14, direction: -1 };
const SCROLL_UNITS_PER_MS = 0.00014; // gentle, smooth scroll
const MAX_TEX_W = 720; // downscale huge source images before GPU upload

const VERTEX_SHADER = `
  uniform float curve;
  varying vec2 vertexUV;
  void main() {
    vertexUV = uv;
    vec3 newPosition = position;
    float distanceFromCenter = abs((modelMatrix * vec4(position, 1.0)).x);
    newPosition.y *= 1.0 + (curve / 100.0) * pow(distanceFromCenter, 2.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  uniform sampler2D tex;
  varying vec2 vertexUV;
  void main() {
    gl_FragColor = texture2D(tex, vertexUV);
  }
`;

const widthFactor = (gap: number) => 1 + gap / 100;

export function Slide4() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const width = el.clientWidth || 1920;
    const height = el.clientHeight || 1028;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      return; // WebGL unavailable — fail gracefully
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(1); // keep the composited layer cheap during slide morphs
    // Passthrough colour: display the photos exactly as the source files, no colour-space filter.
    THREE.ColorManagement.enabled = false;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20);
    camera.position.z = 2;

    const vFov = (camera.fov * Math.PI) / 180;
    const worldHeight = 2 * Math.tan(vFov / 2) * camera.position.z;
    const worldWidth = worldHeight * (width / height);
    const planeSpacePx = (width / worldWidth) * widthFactor(OPTIONS.gap);
    const totalPlanes = Math.ceil(width / planeSpacePx) + 1 + IMAGES.length;
    const initialOffset = Math.ceil(width / (2 * planeSpacePx) - 0.5);

    let disposed = false;

    // Dark placeholder shown until each photo's downscaled texture is ready.
    const placeholder = new THREE.DataTexture(new Uint8Array([8, 18, 38, 255]), 1, 1, THREE.RGBAFormat);
    placeholder.needsUpdate = true;

    const geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
    const materials: THREE.ShaderMaterial[] = [];
    const materialSlot: number[] = [];

    for (let i = 0; i < totalPlanes; i++) {
      const slot = i % IMAGES.length;
      const material = new THREE.ShaderMaterial({
        uniforms: { tex: { value: placeholder }, curve: { value: OPTIONS.curve } },
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        transparent: true,
      });
      materials.push(material);
      materialSlot.push(slot);
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = -1 * OPTIONS.direction * (i - initialOffset) * widthFactor(OPTIONS.gap);
      scene.add(mesh);
    }

    // 6 unique downscaled textures, shared across the repeated planes (instead of one big
    // texture per plane). Each CanvasTexture is created at its final size → no resize re-upload.
    const realTextures: THREE.Texture[] = [];
    const loaderImages: HTMLImageElement[] = [];
    IMAGES.forEach((url, slot) => {
      const img = new Image();
      img.onload = () => {
        if (disposed) return;
        const scale = Math.min(1, MAX_TEX_W / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(2, Math.round(img.width * scale));
        canvas.height = Math.max(2, Math.round(img.height * scale));
        canvas.getContext('2d')?.drawImage(img, 0, 0, canvas.width, canvas.height);
        const tex = new THREE.CanvasTexture(canvas);
        tex.needsUpdate = true;
        realTextures.push(tex);
        materials.forEach((m, mi) => {
          if (materialSlot[mi] === slot) m.uniforms.tex.value = tex;
        });
      };
      loaderImages.push(img);
      img.src = url;
    });

    const loopDistance = widthFactor(OPTIONS.gap) * IMAGES.length;
    const startTime = performance.now();
    let raf = 0;
    let paused = false;

    const animate = (now: number) => {
      raf = requestAnimationFrame(animate);
      if (paused) return;
      // framerate-independent, seamlessly-looping scroll; rendered every frame for a smooth cadence
      const pos = ((now - startTime) * SCROLL_UNITS_PER_MS) % loopDistance;
      scene.position.x = OPTIONS.direction * pos;
      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(animate);

    const onVisibility = () => { paused = document.hidden; };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', onVisibility);
      loaderImages.forEach((img) => { img.onload = null; });
      placeholder.dispose();
      realTextures.forEach((t) => t.dispose());
      materials.forEach((m) => m.dispose());
      geometry.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-[8%] h-[300px] w-[520px] rounded-full bg-[#2ec5ff]/12 blur-[150px]" />
        <div className="absolute bottom-[-14%] right-[8%] h-[320px] w-[480px] rounded-full bg-[#f2b94b]/10 blur-[150px]" />
      </div>

      {/* Curved slider canvas */}
      <div ref={containerRef} className="absolute inset-0 z-10" />

      {/* Top-center calendar header */}
      <header className="absolute left-1/2 top-7 z-30 -translate-x-1/2" style={{ perspective: '1200px' }}>
        <div className="s4cal-card">
          <div className="s4cal-row">
            {calTiles.map((tile, i) => (
              <div
                key={tile.label}
                className="s4cal-tile"
                style={{ animation: `s4CalDrop .6s cubic-bezier(.22,1,.36,1) ${0.45 + i * 0.22}s both` } as CSSProperties}
              >
                <span
                  className="s4cal-num"
                  style={{
                    color: tile.accent,
                    ['--g' as string]: tile.glow,
                    animation: `s4CalGlow 3.2s ease-in-out ${1 + i * 0.22}s infinite`,
                  } as CSSProperties}
                >
                  {tile.num}
                </span>
                <span className="s4cal-label">{tile.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <style>{`
        .s4cal-card {
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(180deg, rgba(6,22,61,0.34), rgba(6,22,61,0.18));
          box-shadow: 0 25px 50px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.10);
          backdrop-filter: blur(2.5px) saturate(115%);
          -webkit-backdrop-filter: blur(2.5px) saturate(115%);
          padding: 12px 30px 18px;
          transform-origin: top center;
          animation: s4CalOpen .8s cubic-bezier(.22,1,.36,1) both;
        }
        .s4cal-row { display: flex; align-items: stretch; }
        .s4cal-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-width: 172px;
          padding: 0 28px;
          will-change: clip-path, opacity, transform;
        }
        .s4cal-tile + .s4cal-tile { border-left: 1px solid rgba(255,255,255,0.12); }
        .s4cal-num {
          font-size: 58px;
          line-height: 0.9;
          font-weight: 900;
          letter-spacing: -0.04em;
          font-variant-numeric: tabular-nums;
        }
        .s4cal-label {
          margin-top: 8px;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.82);
        }

        @keyframes s4CalOpen {
          0% { opacity: 0; transform: rotateX(-85deg) translateY(-24px); }
          100% { opacity: 1; transform: rotateX(0deg) translateY(0); }
        }
        @keyframes s4CalDrop {
          0% { clip-path: inset(0 0 100% 0); opacity: 0; transform: translateY(-12px); }
          55% { opacity: 1; }
          100% { clip-path: inset(0 0 0 0); opacity: 1; transform: translateY(0); }
        }
        @keyframes s4CalGlow {
          0%, 100% { text-shadow: 0 0 16px var(--g); }
          50% { text-shadow: 0 0 34px var(--g), 0 0 60px var(--g); }
        }
      `}</style>
    </div>
  );
}
