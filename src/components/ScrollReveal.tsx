
import React, { useEffect } from 'react';

const ScrollReveal: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const revealElements = document.querySelectorAll('.section-reveal');
    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return null;
};

export default ScrollReveal;
