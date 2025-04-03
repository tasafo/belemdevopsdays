import React from 'react';

const ScrollReveal: React.FC = () => {
  return null;
};

// Export a style object that can be added to the app's global styles
export const scrollRevealStyles = `
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
  
  .animate-on-scroll {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
    animation-play-state: paused;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .animate-on-scroll {
      animation-play-state: paused;
    }
    
    .animate-on-scroll.animate {
      animation-play-state: running;
    }
  }
`;

export default ScrollReveal;
