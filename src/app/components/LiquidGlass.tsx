import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import bgImage from '../../imports/background.jpg';

// ─────────────────────────────────────────────────────────────────────────────
// Apple-style "liquid glass" — a WebGL surface that refracts the deck background
// (background.jpg) behind it with edge/rim/base distortion, corner boost and a
// subtle surface ripple, matching the supplied reference control-panel model.
//
// Instead of snapshotting the page with html2canvas (which cannot follow the
// deck's CSS transform-scale or slide animations), each glass samples the shared
// background image at its real on-screen rect. That keeps it correct through the
// canvas scaling, entrance animations and slide morphs, with no stale snapshot.
//
// Uniform defaults mirror the supplied control screenshot:
//   Edge 0.000 · Rim 0.000 · Base 0.000 · EdgeDist 0.050 · RimDist 0.800
//   BaseDist 0.080 · CornerBoost 0.000 · Ripple 0.100 · Blur 2.500 · Tint 0.000
// ─────────────────────────────────────────────────────────────────────────────

type Props = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  radius?: number;
  blur?: number;
  edgeIntensity?: number;
  rimIntensity?: number;
  baseIntensity?: number;
  edgeDistance?: number;
  rimDistance?: number;
  baseDistance?: number;
  cornerBoost?: number;
  ripple?: number;
  tint?: number;
  warp?: boolean;
};

let bgPromise: Promise<HTMLImageElement> | null = null;
function loadBg(): Promise<HTMLImageElement> {
  if (!bgPromise) {
    bgPromise = new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = bgImage;
    });
  }
  return bgPromise;
}

const VS = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FS = `
precision mediump float;
uniform sampler2D u_bg;
uniform vec2 u_res;        // card size in layout px
uniform float u_radius;    // corner radius in layout px
uniform vec4 u_rect;       // card rect in viewport-normalised units (x,y,w,h)
uniform vec2 u_bgA;        // viewportUV -> image UV linear scale
uniform vec2 u_bgB;        // viewportUV -> image UV linear offset
uniform vec2 u_texel;      // 1 / imageSize
uniform float u_blur;
uniform float u_edgeIntensity;
uniform float u_rimIntensity;
uniform float u_baseIntensity;
uniform float u_edgeDistance;
uniform float u_rimDistance;
uniform float u_baseDistance;
uniform float u_cornerBoost;
uniform float u_ripple;
uniform float u_tint;
uniform float u_warp;
varying vec2 v_uv;

float roundedRectDistance(vec2 coord, vec2 size, float radius) {
  vec2 center = size * 0.5;
  vec2 pixelCoord = coord * size;
  vec2 toCorner = abs(pixelCoord - center) - (center - radius);
  float outsideCorner = length(max(toCorner, 0.0));
  float insideCorner = min(max(toCorner.x, toCorner.y), 0.0);
  return outsideCorner + insideCorner - radius;
}

float circleDistance(vec2 coord, vec2 size, float radius) {
  vec2 center = vec2(0.5, 0.5);
  vec2 pixelCoord = coord * size;
  vec2 centerPixel = center * size;
  return length(pixelCoord - centerPixel) - radius;
}

bool isPill(vec2 size, float radius) {
  float heightRatioDiff = abs(radius - size.y * 0.5);
  bool radiusMatchesHeight = heightRatioDiff < 2.0;
  bool isWiderThanTall = size.x > size.y + 4.0;
  return radiusMatchesHeight && isWiderThanTall;
}

bool isCircle(vec2 size, float radius) {
  float minDim = min(size.x, size.y);
  bool radiusMatchesMinDim = abs(radius - minDim * 0.5) < 1.0;
  bool isRoughlySquare = abs(size.x - size.y) < 4.0;
  return radiusMatchesMinDim && isRoughlySquare;
}

float pillDistance(vec2 coord, vec2 size, float radius) {
  vec2 center = size * 0.5;
  vec2 pixelCoord = coord * size;
  vec2 capsuleStart = vec2(radius, center.y);
  vec2 capsuleEnd = vec2(size.x - radius, center.y);
  vec2 capsuleAxis = capsuleEnd - capsuleStart;
  float capsuleLength = length(capsuleAxis);

  if (capsuleLength > 0.0) {
    vec2 toPoint = pixelCoord - capsuleStart;
    float t = clamp(dot(toPoint, capsuleAxis) / dot(capsuleAxis, capsuleAxis), 0.0, 1.0);
    vec2 closestPointOnAxis = capsuleStart + t * capsuleAxis;
    return length(pixelCoord - closestPointOnAxis) - radius;
  }
  return length(pixelCoord - center) - radius;
}

vec2 toImg(vec2 localUV) {
  vec2 vpUV = u_rect.xy + localUV * u_rect.zw;   // viewport-space UV
  return vpUV * u_bgA + u_bgB;                    // object-fit: cover mapping
}

void main() {
  vec2 coord = vec2(v_uv.x, 1.0 - v_uv.y);       // flip Y for DOM orientation
  float minRes = min(u_res.x, u_res.y);

  float distShape;
  vec2 shapeNormal;

  if (isPill(u_res, u_radius)) {
    distShape = -pillDistance(coord, u_res, u_radius);
    vec2 center = vec2(0.5, 0.5);
    vec2 pixelCoord = coord * u_res;
    vec2 capsuleStart = vec2(u_radius, center.y * u_res.y);
    vec2 capsuleEnd = vec2(u_res.x - u_radius, center.y * u_res.y);
    vec2 capsuleAxis = capsuleEnd - capsuleStart;
    float capsuleLength = length(capsuleAxis);
    if (capsuleLength > 0.0) {
      vec2 toPoint = pixelCoord - capsuleStart;
      float t = clamp(dot(toPoint, capsuleAxis) / dot(capsuleAxis, capsuleAxis), 0.0, 1.0);
      vec2 closestPointOnAxis = capsuleStart + t * capsuleAxis;
      vec2 normalDir = pixelCoord - closestPointOnAxis;
      shapeNormal = length(normalDir) > 0.0 ? normalize(normalDir) : vec2(0.0, 1.0);
    } else {
      shapeNormal = normalize(coord - center);
    }
  } else if (isCircle(u_res, u_radius)) {
    distShape = -circleDistance(coord, u_res, u_radius);
    shapeNormal = normalize(coord - vec2(0.5));
  } else {
    distShape = -roundedRectDistance(coord, u_res, u_radius);
    shapeNormal = normalize(coord - vec2(0.5));
  }

  float nd = max(distShape, 0.0);                 // px inside from edge
  float distFromEdge = nd / minRes;

  // Refraction falloffs (reference model).
  float baseI = 1.0 - exp(-nd * u_baseDistance);
  float edgeI = exp(-nd * u_edgeDistance);
  float rimI  = exp(-nd * u_rimDistance);

  float baseComp = u_warp > 0.5 ? baseI * u_baseIntensity : 0.0;
  float total = baseComp + edgeI * u_edgeIntensity + rimI * u_rimIntensity;
  vec2 baseRefr = shapeNormal * total;

  // Corner enhancement — only fires near true corners.
  float cornerProxX = min(coord.x, 1.0 - coord.x);
  float cornerProxY = min(coord.y, 1.0 - coord.y);
  float cornerDist = max(cornerProxX, cornerProxY);
  float cornerBoost = exp(-cornerDist * minRes * 0.3) * u_cornerBoost;
  vec2 cornerRefr = shapeNormal * cornerBoost;

  // Surface ripple near the edge.
  vec2 perp = vec2(-shapeNormal.y, shapeNormal.x);
  float ripple = sin(distFromEdge * 25.0) * u_ripple * rimI;
  vec2 rippleRefr = perp * ripple;

  vec2 imgUV = toImg(coord) + baseRefr + cornerRefr + rippleRefr;

  // Gaussian blur (13×13 circular kernel), as in the reference.
  vec3 col = vec3(0.0);
  float wsum = 0.0;
  float sigma = max(u_blur / 2.0, 0.001);
  vec2 blurStep = u_texel * sigma;
  for (int i = -6; i <= 6; i++) {
    for (int j = -6; j <= 6; j++) {
      float fi = float(i);
      float fj = float(j);
      float distance = length(vec2(fi, fj));
      if (distance > 6.0) continue;
      float w = exp(-(distance * distance) / (2.0 * sigma * sigma));
      col += texture2D(u_bg, imgUV + vec2(fi, fj) * blurStep).rgb * w;
      wsum += w;
    }
  }
  col /= wsum;

  // Vertical white→grey tint for depth.
  vec3 gradientTint = mix(vec3(1.0), vec3(0.7), coord.y);
  col = mix(col, gradientTint, u_tint);

  // Sampled local gradient, blended lightly for the liquid "inside the glass" feel.
  vec3 topColor = texture2D(u_bg, toImg(vec2(0.5, 0.1))).rgb;
  vec3 midColor = texture2D(u_bg, toImg(vec2(0.5, 0.5))).rgb;
  vec3 bottomColor = texture2D(u_bg, toImg(vec2(0.5, 0.9))).rgb;
  vec3 sampledGradient;
  if (coord.y < 0.1) {
    sampledGradient = topColor;
  } else if (coord.y > 0.9) {
    sampledGradient = bottomColor;
  } else {
    float transitionPos = (coord.y - 0.1) / 0.8;
    if (transitionPos < 0.5) {
      sampledGradient = mix(topColor, midColor, transitionPos * 2.0);
    } else {
      sampledGradient = mix(midColor, bottomColor, (transitionPos - 0.5) * 2.0);
    }
  }
  col = mix(col, sampledGradient, u_tint * 0.3);

  float maskDistance;
  if (isPill(u_res, u_radius)) {
    maskDistance = pillDistance(coord, u_res, u_radius);
  } else if (isCircle(u_res, u_radius)) {
    maskDistance = circleDistance(coord, u_res, u_radius);
  } else {
    maskDistance = roundedRectDistance(coord, u_res, u_radius);
  }
  float mask = 1.0 - smoothstep(-1.0, 1.0, maskDistance);
  gl_FragColor = vec4(col, mask);
}`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error('LiquidGlass shader error:', gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export function LiquidGlass({
  children,
  className = '',
  style,
  radius = 18,
  blur = 2.5,
  edgeIntensity = 0.0,
  rimIntensity = 0.0,
  baseIntensity = 0.0,
  edgeDistance = 0.05,
  rimDistance = 0.8,
  baseDistance = 0.08,
  cornerBoost = 0.0,
  ripple = 0.1,
  tint = 0.0,
  warp = false,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hasPositionClass = /(?:^|\s)(absolute|fixed|relative|sticky)(?:\s|$)/.test(className);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
    } catch { /* ignore */ }
    if (!gl) return;
    const glc = gl;

    let disposed = false;
    let raf = 0;
    let program: WebGLProgram | null = null;
    let tex: WebGLTexture | null = null;
    const u: Record<string, WebGLUniformLocation | null> = {};
    let onResize: (() => void) | null = null;

    // Defer the expensive part — context setup, shader compile and the first
    // heavy renders — until *after* the page-morph transition (600ms) has run,
    // with a little per-instance jitter so several cards on one slide don't all
    // compile at the same frame. Until then the CSS gradient fallback shows, so
    // swiping into a glass-heavy slide stays smooth instead of hitching.
    const initDelay = 560 + Math.random() * 220;
    const initTimer = setTimeout(() => {
      if (disposed) return;
      loadBg().then((img) => {
      if (disposed) return;
      const vs = compile(glc, glc.VERTEX_SHADER, VS);
      const fs = compile(glc, glc.FRAGMENT_SHADER, FS);
      if (!vs || !fs) return;
      program = glc.createProgram()!;
      glc.attachShader(program, vs);
      glc.attachShader(program, fs);
      glc.linkProgram(program);
      if (!glc.getProgramParameter(program, glc.LINK_STATUS)) {
        console.error('LiquidGlass link error:', glc.getProgramInfoLog(program));
        return;
      }
      glc.useProgram(program);

      const buf = glc.createBuffer();
      glc.bindBuffer(glc.ARRAY_BUFFER, buf);
      glc.bufferData(glc.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), glc.STATIC_DRAW);
      const posLoc = glc.getAttribLocation(program, 'a_pos');
      glc.enableVertexAttribArray(posLoc);
      glc.vertexAttribPointer(posLoc, 2, glc.FLOAT, false, 0, 0);

      const names = ['u_res', 'u_radius', 'u_rect', 'u_bgA', 'u_bgB', 'u_texel', 'u_blur',
        'u_edgeIntensity', 'u_rimIntensity', 'u_baseIntensity', 'u_edgeDistance', 'u_rimDistance',
        'u_baseDistance', 'u_cornerBoost', 'u_ripple', 'u_tint', 'u_warp', 'u_bg'];
      for (const name of names) u[name] = glc.getUniformLocation(program, name);

      tex = glc.createTexture();
      glc.bindTexture(glc.TEXTURE_2D, tex);
      glc.texImage2D(glc.TEXTURE_2D, 0, glc.RGBA, glc.RGBA, glc.UNSIGNED_BYTE, img);
      glc.texParameteri(glc.TEXTURE_2D, glc.TEXTURE_MIN_FILTER, glc.LINEAR);
      glc.texParameteri(glc.TEXTURE_2D, glc.TEXTURE_MAG_FILTER, glc.LINEAR);
      glc.texParameteri(glc.TEXTURE_2D, glc.TEXTURE_WRAP_S, glc.CLAMP_TO_EDGE);
      glc.texParameteri(glc.TEXTURE_2D, glc.TEXTURE_WRAP_T, glc.CLAMP_TO_EDGE);

      glc.uniform1i(u.u_bg!, 0);
      glc.uniform1f(u.u_radius!, radius);
      glc.uniform1f(u.u_blur!, blur);
      glc.uniform1f(u.u_edgeIntensity!, edgeIntensity);
      glc.uniform1f(u.u_rimIntensity!, rimIntensity);
      glc.uniform1f(u.u_baseIntensity!, baseIntensity);
      glc.uniform1f(u.u_edgeDistance!, edgeDistance);
      glc.uniform1f(u.u_rimDistance!, rimDistance);
      glc.uniform1f(u.u_baseDistance!, baseDistance);
      glc.uniform1f(u.u_cornerBoost!, cornerBoost);
      glc.uniform1f(u.u_ripple!, ripple);
      glc.uniform1f(u.u_tint!, tint);
      glc.uniform1f(u.u_warp!, warp ? 1.0 : 0.0);
      glc.uniform2f(u.u_texel!, 1 / img.naturalWidth, 1 / img.naturalHeight);

      const imgW = img.naturalWidth;
      const imgH = img.naturalHeight;
      let lastW = -1;
      let lastH = -1;

      // The background and the card's on-screen rect only change while the card
      // is moving (entrance animation) or the deck rescales (window resize). Once
      // the rect has been identical for a few frames we stop the rAF loop, so an
      // idle glass card costs nothing — this is what kills the steady-state jank.
      // `kick` restarts the loop on resize to re-sync after a rescale.
      const STABLE_LIMIT = 8;
      let stable = 0;
      let prevKey = '';
      let running = false;

      const render = () => {
        if (disposed || !program) return;

        const w = Math.max(1, Math.round(wrap.offsetWidth));
        const h = Math.max(1, Math.round(wrap.offsetHeight));
        if (w !== lastW || h !== lastH) {
          lastW = w; lastH = h;
          canvas.width = w;
          canvas.height = h;
          glc.viewport(0, 0, w, h);
          glc.uniform2f(u.u_res!, w, h);
        }

        const r = wrap.getBoundingClientRect();
        const vw = window.innerWidth || 1;
        const vh = window.innerHeight || 1;
        glc.uniform4f(u.u_rect!, r.left / vw, r.top / vh, r.width / vw, r.height / vh);

        const s = Math.max(vw / imgW, vh / imgH);
        const dispW = imgW * s;
        const dispH = imgH * s;
        const offX = (vw - dispW) / 2;
        const offY = (vh - dispH) / 2;
        glc.uniform2f(u.u_bgA!, vw / dispW, vh / dispH);
        glc.uniform2f(u.u_bgB!, -offX / dispW, -offY / dispH);

        glc.clearColor(0, 0, 0, 0);
        glc.clear(glc.COLOR_BUFFER_BIT);
        glc.drawArrays(glc.TRIANGLES, 0, 6);
        if (canvas.style.opacity !== '1') {
          canvas.style.opacity = '1';
        }

        // Stop once nothing has moved for STABLE_LIMIT frames.
        const key = `${w}x${h}|${Math.round(r.left)},${Math.round(r.top)}`;
        if (key === prevKey) stable++; else { stable = 0; prevKey = key; }
        if (stable >= STABLE_LIMIT) { running = false; return; }
        raf = requestAnimationFrame(render);
      };

      const kick = () => {
        if (disposed || !program || running) return;
        running = true;
        stable = 0;
        prevKey = '';
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(render);
      };

      onResize = kick;
      window.addEventListener('resize', kick);
      running = true;
      render();
      });
    }, initDelay);

    return () => {
      disposed = true;
      clearTimeout(initTimer);
      cancelAnimationFrame(raf);
      if (onResize) window.removeEventListener('resize', onResize);
      if (tex) glc.deleteTexture(tex);
      if (program) glc.deleteProgram(program);
      const ext = glc.getExtension('WEBGL_lose_context');
      if (ext) ext.loseContext();
    };
  }, [radius, blur, edgeIntensity, rimIntensity, baseIntensity, edgeDistance, rimDistance, baseDistance, cornerBoost, ripple, tint, warp]);

  return (
    <div
      ref={wrapRef}
      className={`${hasPositionClass ? '' : 'relative'} liquid-glass-surface ${className}`}
      style={{
        borderRadius: radius,
        background: 'linear-gradient(180deg, rgba(6,22,61,0.34), rgba(6,22,61,0.18))',
        ...style,
      }}
    >
      <canvas
        ref={canvasRef}
        className="liquid-glass-canvas pointer-events-none absolute inset-0 h-full w-full"
        style={{ borderRadius: radius, opacity: 0 }}
      />
      <span
        className="pointer-events-none absolute inset-[1px]"
        style={{
          borderRadius: Math.max(0, radius - 1),
          border: '1px solid rgba(255,255,255,0.10)',
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
