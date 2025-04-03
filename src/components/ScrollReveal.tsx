
import React, { useEffect } from 'react';

const ScrollReveal: React.FC = () => {
  useEffect(() => {
    // Apply smooth scrolling to the whole page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add a slight delay to prevent flickering
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, 50);
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
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Add global styles to prevent page flashing on load
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .section-reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .revealed {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Preload animation to prevent flashing */
      body {
        animation: fade-in 0.3s ease-out;
      }
      
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default ScrollReveal;
