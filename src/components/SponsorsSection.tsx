
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface Sponsor {
  id: string;
  name: string;
  url: string;
  logo: string;
}

interface SponsorLevel {
  id: string;
  label: string;
  amount: string;
  sponsors: Sponsor[];
}

const SponsorsSection = () => {
  const [sponsorLevels, setSponsorLevels] = useState<SponsorLevel[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch('/data/sponsors.json');
        const data = await response.json();
        setSponsorLevels(data.sponsor_levels || []);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
        setSponsorLevels([]);
      }
    };

    fetchSponsors();
  }, []);

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

  // Filter for main sponsor levels (exclude community and support)
  const mainLevels = sponsorLevels.filter(
    level => !['community', 'support'].includes(level.id)
  ).slice(0, 3);
  
  // Get community sponsors separately
  const communityLevel = sponsorLevels.find(level => level.id === 'community');

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2">
            Patrocinadores
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Conheça as empresas que estão apoiando o DevOpsDays Belém 2025
          </p>
          
          {/* Sponsors displayed vertically */}
          <div className="space-y-16">
            {mainLevels.map((level) => (
              <div key={level.id} className="text-center">
                <h3 className="text-xl font-bold mb-6 text-primary-dark">{level.label}</h3>
                
                {level.sponsors.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-10">
                    {level.sponsors.map((sponsor) => (
                      <a 
                        key={sponsor.id}
                        href={sponsor.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block hover:opacity-80 transition-opacity"
                      >
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name} 
                          className="max-h-24 max-w-full mx-auto"
                        />
                        <p className="mt-2 text-gray-700">{sponsor.name}</p>
                      </a>
                    ))}
                  </div>
                ) : (
                  <Link to="/patrocinio" className="block p-8 text-gray-500 hover:text-primary transition-colors">
                    Seja o primeiro patrocinador desta categoria!
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Community Sponsors */}
          {communityLevel && communityLevel.sponsors.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-6 text-center">Comunidades Apoiadoras</h3>
              <div className="flex flex-wrap justify-center gap-10">
                {communityLevel.sponsors.map((sponsor) => (
                  <a 
                    key={sponsor.id}
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-h-20 max-w-full mx-auto"
                    />
                    <p className="mt-2 text-center text-gray-700">{sponsor.name}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
          
          <div className="text-center mt-16">
            <Link to="/patrocinio">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                Torne-se um Patrocinador
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
