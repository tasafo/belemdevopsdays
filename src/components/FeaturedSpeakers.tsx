'use client';

import React, { useState, useEffect } from 'react';
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
import speakersData from '@/data/speakers';
import Link from 'next/link';

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
  const speakers = [...speakersData || []].sort(() => Math.random() - 0.5);
  const [apiCarousel, setApiCarousel] = useState<any>(null);

  useEffect(() => {
    if (!apiCarousel || speakers.length <= 3) return;
    
    const interval = setInterval(() => {
      apiCarousel.scrollNext();
    }, 2400);
    
    return () => clearInterval(interval);
  }, [apiCarousel, speakers.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2">
          Palestrantes
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Conheça os especialistas que estarão compartilhando conhecimento no DevOpsDays Belém
        </p>
        
        <div className="relative">
          <Carousel 
            setApi={setApiCarousel}
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
                          <Link href={`/palestrantes/${speaker.id}`}>
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
              <CarouselPrevious className="relative left-0 right-auto translate-y-0 mr-2" />
              <CarouselNext className="relative left-auto right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/palestrantes">
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Ver todos os palestrantes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
