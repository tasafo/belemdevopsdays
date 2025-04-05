'use client';

import React from 'react';
import Link from 'next/link';
import { Talk } from '@/data/talks';
import speakersData from '@/data/speakers';

interface TalkCardProps {
  talk: Talk;
}

export default function TalkCard({ talk }: TalkCardProps) {
  const isTalk = talk.type === 'talk';
  const isBreak = talk.type === 'break';

  let cardClasses = 'p-6 rounded-lg ';
  
  if (isBreak) {
    cardClasses += 'bg-gray-100 border-l-4 border-gray-400';
  } else if (isTalk) {
    cardClasses += 'bg-white shadow-md border-l-4 border-primary';
  } else {
    cardClasses += 'bg-accent border-l-4 border-secondary';
  }

  // Speaker data functions inside the component
  const getSpeakerName = (speakerId: string) => {
    const speaker = speakersData.find(s => s.id === speakerId);
    return speaker ? speaker.name : '';
  };

  const getSpeakerCompany = (speakerId: string) => {
    const speaker = speakersData.find(s => s.id === speakerId);
    return speaker ? speaker.company : '';
  };

  const Content = () => (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <div className="w-full md:w-1/6 font-medium text-gray-700">
        {talk.time}
      </div>
      <div className="w-full md:w-5/6">
        <h3 className={`font-bold ${isTalk ? 'text-xl' : 'text-lg'} mb-2`}>
          {talk.title}
        </h3>
        {talk.speaker_id && (
          <p className="text-gray-600 mb-3">
            {getSpeakerName(talk.speaker_id)} • {getSpeakerCompany(talk.speaker_id)}
          </p>
        )}
        {talk.description && (
          <p className="text-gray-700 mt-2">{talk.description}</p>
        )}
      </div>
    </div>
  );
  
  if (isTalk) {
    return (
      <Link
        href={`/programacao/${talk.id}`}
        className={`${cardClasses} block transition-transform hover:scale-105`}
      >
        <Content />
      </Link>
    );
  }
  
  return (
    <div className={cardClasses}>
      <Content />
    </div>
  );
} 