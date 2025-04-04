import React from 'react';
import type { Metadata } from 'next';
import speakers from '@/data/speakers';
import SpeakerCard from '@/components/SpeakerCard';
import EmptyState from '@/components/EmptyState';

export const metadata: Metadata = {
  title: 'Palestrantes | DevOpsDays Belém 2025',
  description: 'Conheça os palestrantes do DevOpsDays Belém 2025, suas experiências e o que vão compartilhar.',
};

export default function SpeakersPage ()  {
  const handleSubmitTalk = () => {
    window.location.href = 'https://www.papercall.io/devopsdaysbelem2025';
  };

  
  if (speakers.length === 0) {
    return (
      <EmptyState
        title="Palestrantes"
      />
    );
  }


  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Palestrantes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os especialistas que vão compartilhar seu conhecimento no DevOpsDays Belém 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};