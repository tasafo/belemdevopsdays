'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { Speaker } from '@/data/speakers';

interface SpeakerCardProps {
  speaker: Speaker;
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <Link
      href={`/palestrantes/${speaker.id}`}
      key={speaker.id}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-110"
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
          {speaker.social.instagram && (
            <a
              href={speaker.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
              onClick={(e) => e.stopPropagation()}
            >
              <Instagram size={20} />
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
  );
} 