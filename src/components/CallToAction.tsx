
import { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-primary relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="section-reveal">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Garanta sua vaga no DevOpsDays Belém 2025
            </h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Junte-se a profissionais e entusiastas de tecnologia para um dia de aprendizado, networking e troca de experiências.
            </p>
            
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
              <a href="https://www.sympla.com.br/evento/devopsdays-belem-2025/2818140" target="_blank" rel="noopener noreferrer">
                Inscreva-se agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
