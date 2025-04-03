
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Twitter, Linkedin, Github } from 'lucide-react';

interface Speaker {
  id: string;
  name: string;
  bio: string;
  company: string;
  photo: string;
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}

const FeaturedSpeakers = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch('/data/speakers.json');
        const data = await response.json();
        // Randomize the order of speakers
        const shuffledSpeakers = [...data.speakers || []].sort(() => Math.random() - 0.5);
        setSpeakers(shuffledSpeakers);
      } catch (error) {
        console.error('Error fetching speakers:', error);
        setSpeakers([]);
      }
    };

    fetchSpeakers();
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

  // Start automatic carousel
  useEffect(() => {
    if (speakers.length <= 3) return;
    
    const startTimer = () => {
      timerRef.current = window.setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === Math.max(0, speakers.length - 3) ? 0 : prevIndex + 1
        );
      }, 3000);
    };
    
    startTimer();
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, speakers.length]);

  const nextSlide = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.max(0, speakers.length - 3) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, speakers.length - 3) : prevIndex - 1
    );
  };

  const visibleSpeakers = speakers.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2">
            Palestrantes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Conheça os especialistas que estarão compartilhando conhecimento no DevOpsDays Belém
          </p>
          
          <div className="relative">
            {speakers.length > 3 && (
              <>
                <button 
                  onClick={prevSlide} 
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                  aria-label="Previous speakers"
                >
                  <ChevronLeft className="text-primary" />
                </button>
                <button 
                  onClick={nextSlide} 
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                  aria-label="Next speakers"
                >
                  <ChevronRight className="text-primary" />
                </button>
              </>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
              {visibleSpeakers.map((speaker) => (
                <Card key={speaker.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gray-200 relative">
                      <img 
                        src={speaker.photo} 
                        alt={speaker.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-1">{speaker.name}</h3>
                      <p className="text-gray-600 mb-3">{speaker.company}</p>
                      <p className="text-gray-700 line-clamp-3 mb-4">{speaker.bio}</p>
                      
                      <div className="flex items-center justify-between">
                        <Link to={`/palestrantes/${speaker.id}`}>
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                            Ver Perfil
                          </Button>
                        </Link>
                        
                        <div className="flex space-x-2">
                          {speaker.social.twitter && (
                            <a href={`https://twitter.com/${speaker.social.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                              <Twitter size={20} />
                            </a>
                          )}
                          {speaker.social.linkedin && (
                            <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                              <Linkedin size={20} />
                            </a>
                          )}
                          {speaker.social.github && (
                            <a href={speaker.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                              <Github size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/palestrantes">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                Ver Todos os Palestrantes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
