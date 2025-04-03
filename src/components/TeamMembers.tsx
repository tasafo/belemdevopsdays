'use client';

import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Twitter, Linkedin } from 'lucide-react';
import teamData from '@/data/team_members.json';

interface TeamMember {
  name: string;
  employer: string;
  image: string;
  twitter?: string;
  linkedin?: string;
}

const TeamMembers = () => {
  const members = [...teamData.team_members || []].sort(() => Math.random() - 0.5);
  const [apiCarousel, setApiCarousel] = useState<any>(null);

  useEffect(() => {
    if (!apiCarousel || members.length <= 3) return;
    
    const interval = setInterval(() => {
      apiCarousel.scrollNext();
    }, 2400);
    
    return () => clearInterval(interval);
  }, [apiCarousel, members.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2">
          Equipe Organizadora
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Conheça os voluntários que estão tornando o DevOpsDays Belém possível
        </p>
        
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          setApi={setApiCarousel}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {members.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                <div className="text-center p-2">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1 text-ellipsis overflow-hidden whitespace-nowrap">{member.name}</h3>
                  <p className="text-gray-600 mb-3 text-ellipsis overflow-hidden whitespace-nowrap">{member.employer}</p>
                  <div className="flex justify-center space-x-3">
                    {member.twitter && (
                      <a 
                        href={`https://twitter.com/${member.twitter}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600"
                        aria-label={`Twitter de ${member.name}`}
                      >
                        <Twitter size={20} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900"
                        aria-label={`LinkedIn de ${member.name}`}
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative left-0 right-auto translate-y-0 mr-2" />
            <CarouselNext className="relative left-auto right-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TeamMembers;
