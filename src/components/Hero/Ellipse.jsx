'use client';

import { forwardRef, useEffect, useRef } from "react";

export function useRotatingAnimation(speed = 0.01) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rotation = 0;
    let frame;

    const animate = () => {
      rotation += speed;
      el.style.transform = `rotate(${rotation}rad)`;
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, [speed]);

  return ref;
}

const Ellipse = forwardRef(({ className = "", ...props }, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 412 413"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full h-full ${className}`}
    fill="none"
    {...props}
  >
    <circle
      cx="206"
      cy="206.401"
      r="204.5"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="18 36 54 72"
    />
  </svg>
));

Ellipse.displayName = "Ellipse";

export default Ellipse;