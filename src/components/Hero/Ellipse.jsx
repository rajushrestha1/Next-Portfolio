'use client';

import { forwardRef, useEffect, useRef } from 'react';

// Rotating animation hook for Ellipse
export function useRotatingAnimation(speed = 0.01) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let rotation = 0;
    const animate = () => {
      rotation += speed;
      element.style.transform = `rotate(${rotation}rad)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, [speed]);

  return ref;
}

// Ellipse component
const Ellipse = forwardRef((props, ref) => (
  <svg
    ref={ref}
    width="412"
    height="413"
    viewBox="0 0 412 413"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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

export default Ellipse;
