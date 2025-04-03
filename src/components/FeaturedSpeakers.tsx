
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  const [api, setApi] = useState<any>(null);
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

  // Auto-advance carousel
  useEffect(() => {
    if (!api || speakers.length <= 3) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [api, speakers.length]);

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
            <Carousel 
              setApi={setApi}
              className="w-full max-w-5xl mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {speakers.map((speaker) => (
                  <CarouselItem key={speaker.id} className="md:basis-1/3 pl-4">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white h-full">
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static left-0 right-auto translate-y-0 mr-2" />
                <CarouselNext className="relative static left-auto right-0 translate-y-0" />
              </div>
            </Carousel>
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
