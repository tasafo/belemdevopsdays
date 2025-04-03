
import React, { useEffect } from 'react';

const ScrollReveal: React.FC = () => {
  useEffect(() => {
    // Apply smooth scrolling to the whole page with reduced delay
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Make reveal immediate to prevent flickering
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
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Add global styles with improved transitions
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .section-reveal {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.4s ease-out, transform 0.4s ease-out;
        will-change: opacity, transform;
      }
      
      .revealed {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Improve page load animation */
      body {
        animation: none;
        opacity: 1;
      }
      
      /* Hero section specific animations */
      .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      @keyframes fadeInUp {
        from { 
          opacity: 0; 
          transform: translateY(20px);
        }
        to { 
          opacity: 1; 
          transform: translateY(0);
        }
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
