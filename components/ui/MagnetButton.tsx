"use client";

import { useRef, useState } from "react";

interface MagnetButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;   // 0–1, how far it moves (default 0.35)
  radius?: number;     // px radius that activates the magnet effect
  as?: "a" | "button";
  href?: string;
  "aria-label"?: string;
}

/**
 * Magnetic button — follows the cursor within `radius` pixels.
 * On touch devices it renders as a plain wrapper (no effect).
 */
export function MagnetButton({
  children,
  className = "",
  strength = 0.35,
  radius = 80,
  href,
  "aria-label": ariaLabel,
}: MagnetButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < radius) {
      setActive(true);
      setPos({ x: dx * strength, y: dy * strength });
    } else {
      setActive(false);
      setPos({ x: 0, y: 0 });
    }
  }

  function handleMouseLeave() {
    setActive(false);
    setPos({ x: 0, y: 0 });
  }

  return (
    <a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: active
          ? "transform 0.12s cubic-bezier(0.22, 1, 0.36, 1)"
          : "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      className={className}
    >
      {children}
    </a>
  );
}
