import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Sobre o Evento
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-700 text-lg mb-6">
              O <strong>DevOpsDays Belém</strong> é uma série de conferências técnicas voltadas para desenvolvedores, administradores de sistemas e profissionais afins envolvidos em operações de TI e desenvolvimento de software. O evento aborda tópicos relacionados à cultura DevOps, automação, testes, segurança e práticas organizacionais.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Nosso evento é organizado por voluntários apaixonados e faz parte do movimento global DevOpsDays, que reúne comunidades locais ao redor do mundo para compartilhar conhecimentos e experiências.
            </p>
            <p className="text-gray-700 text-lg">
              Em 2025, teremos um dia repleto de palestras, lightning talks, fishbowls e networking para promover a troca de conhecimento e fortalecer a comunidade de tecnologia na região Norte do Brasil.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3">Palestras</h3>
              <p>Conteúdo apresentado por especialistas em DevOps, cultura, ferramentas e metodologias.</p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary to-secondary-light text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3">Open Spaces</h3>
              <p>Discussões auto-organizadas onde os participantes criam a agenda.</p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary to-secondary-light text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3">Networking</h3>
              <p>Conecte-se com profissionais e empresas da área de tecnologia.</p>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary-light text-white rounded-lg p-6 transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold mb-3">Comunidade</h3>
              <p>Fortaleça a comunidade tech local e amplie seu conhecimento.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
