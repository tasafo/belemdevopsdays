'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Github } from 'lucide-react';
import speakers from '@/data/speakers';

const Speakers = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Palestrantes</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Conheça os especialistas que vão compartilhar seu conhecimento no DevOpsDays Belém 2025
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {speakers.speakers.map((speaker) => (
          <Link 
            href={`/palestrantes/${speaker.id}`} 
            key={speaker.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative h-64 w-full">
              <Image
                src={speaker.photo}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-1">{speaker.name}</h2>
              <p className="text-muted-foreground mb-3">{speaker.company}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">{speaker.bio}</p>
              
              <div className="flex space-x-3">
                {speaker.social.twitter && (
                  <a 
                    href={`https://twitter.com/${speaker.social.twitter}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-500"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Twitter size={20} />
                  </a>
                )}
                {speaker.social.linkedin && (
                  <a 
                    href={speaker.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-800"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {speaker.social.github && (
                  <a 
                    href={speaker.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speakers; 