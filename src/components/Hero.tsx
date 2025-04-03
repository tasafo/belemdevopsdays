
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-blur overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 z-10">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/lovable-uploads/ac658e29-076d-46c0-9e08-e62aba43a372.png" 
            alt="DevOpsDays Belém Logo" 
            className="w-48 md:w-64 lg:w-80 mb-8 animate-fade-in-up" 
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            DevOpsDays Belém 2025
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            7 de Junho de 2025 • Belém, Pará • 09:00 - 18:00
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg">
              <a href="https://www.sympla.com.br/evento/devopsdays-belem-2025/2818140" target="_blank" rel="noopener noreferrer">
                Inscreva-se Agora
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary-light hover:text-white px-8 py-6 text-lg">
              <a href="https://www.papercall.io/devopsdaysbelem2025" target="_blank" rel="noopener noreferrer">
                Submeta sua Palestra
              </a>
            </Button>
          </div>
          
          <div className="absolute bottom-16 left-0 right-0 flex justify-center animate-bounce">
            <a href="#about" className="text-primary">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="36" 
                height="36" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5"/>
                <path d="M7 7l5 5 5-5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
