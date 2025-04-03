import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github } from 'lucide-react';
import SponsorsSection from '@/components/SponsorsSection';
import CallToAction from '@/components/CallToAction';
import speakersData from '@/data/speakers.json';

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

const Speakers = () => {
  const speakers: Speaker[] = speakersData.speakers || [];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Palestrantes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os especialistas que irão compartilhar seu conhecimento no DevOpsDays Belém 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="aspect-square bg-gray-200 relative">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="font-bold text-xl mb-1">{speaker.name}</h2>
                <p className="text-gray-600 mb-3">{speaker.company}</p>
                <p className="text-gray-700 line-clamp-3 mb-4">{speaker.bio}</p>

                <div className="flex items-center justify-between">
                  <Link to={`/palestrantes/${speaker.id}`}>
                    <Button className="bg-primary hover:bg-primary-dark text-white">
                      Ver Perfil
                    </Button>
                  </Link>

                  <div className="flex space-x-3">
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
            </div>
          ))}
        </div>
      </div>

      <SponsorsSection />
      <CallToAction />
    </div>
  );
};

export default Speakers;
