"use client";

import { useEffect, useRef } from "react";

interface ScrollDistortProps {
  children: React.ReactNode;
  /** Max skew angle in degrees (default 5) */
  maxSkew?: number;
  /** px/ms velocity required to start the effect (default 9) */
  threshold?: number;
  /** Spring stiffness — how fast skew chases the target (default 0.14) */
  stiffness?: number;
  /** Spring damping — how quickly oscillation dies (default 0.72) */
  damping?: number;
}

/**
 * Physics-based scroll distortion:
 *  • EMA-smoothed velocity  → stable, no single-frame spikes
 *  • tanh saturation curve  → smooth falloff, no hard clamp
 *  • Spring dynamics        → natural, oscillatory return to rest
 *  • Subtle scaleY squish   → simulates physical inertia compression
 *  • Disabled for prefers-reduced-motion users
 */
export function ScrollDistort({
  children,
  maxSkew   = 5,
  threshold = 9,
  stiffness = 0.14,
  damping   = 0.72,
}: ScrollDistortProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const EMA_ALPHA = 0.18; // smoothing factor (0=frozen, 1=raw)

    let lastY     = window.scrollY;
    let lastTime  = performance.now();
    let smoothVel = 0;   // EMA-smoothed velocity (px/ms)
    let skew      = 0;   // current skew angle (deg)
    let skewVel   = 0;   // spring velocity
    let rafId: number;

    function tick(now: number) {
      const y   = window.scrollY;
      const dt  = Math.max(now - lastTime, 1);   // guard against 0
      const raw = (y - lastY) / dt;              // px/ms this frame

      // Exponential moving average — smooths out single-frame spikes
      smoothVel = EMA_ALPHA * raw + (1 - EMA_ALPHA) * smoothVel;

      // Target skew — only engage above threshold, saturate with tanh
      const absVel   = Math.abs(smoothVel);
      const dir      = smoothVel >= 0 ? 1 : -1;
      const excess   = Math.max(0, absVel - threshold);
      // tanh gives an S-curve: fast initial rise, soft ceiling at maxSkew
      const target   = dir * Math.tanh(excess * 0.55) * maxSkew;

      // Spring: force pulls skew toward target, damping kills oscillation
      const force = (target - skew) * stiffness;
      skewVel = skewVel * damping + force;
      skew   += skewVel;

      // Snap to rest when energy is negligible
      if (Math.abs(skew) < 0.004 && Math.abs(skewVel) < 0.004) {
        skew    = 0;
        skewVel = 0;
      }

      if (ref.current && skew !== 0) {
        // Subtle vertical squish as if the content has physical mass
        const squish = 1 - Math.abs(skew) * 0.0025;
        ref.current.style.transform =
          `skewY(${skew.toFixed(4)}deg) scaleY(${squish.toFixed(5)})`;
        ref.current.style.transformOrigin = "50% 50%";
      } else if (ref.current && skew === 0) {
        ref.current.style.transform = "";
      }

      lastY    = y;
      lastTime = now;
      rafId    = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [maxSkew, threshold, stiffness, damping]);

  return (
    <div ref={ref} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
