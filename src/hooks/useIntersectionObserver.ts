import { useRef } from 'react';

export default function useIntersectionObserver(callback: () => void) {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 1 },
    ),
  );

  const observe = (element: HTMLElement | null) => {
    element && observer.current.observe(element);
  };

  const unobserve = (element: HTMLElement | null) => {
    element && observer.current.unobserve(element);
  };

  return [observe, unobserve];
}
