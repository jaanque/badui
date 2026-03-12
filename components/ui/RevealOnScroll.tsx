"use client";

import { useEffect, useRef } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;    // ms
  className?: string;
  threshold?: number;
}

/**
 * Wraps children and fades them in (translateY → 0) once they enter
 * the viewport via IntersectionObserver. Respects prefers-reduced-motion.
 */
export function RevealOnScroll({
  children,
  delay = 0,
  className = "",
  threshold = 0.12,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`reveal-initial ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
