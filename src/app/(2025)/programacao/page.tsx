import React from 'react';
import type { Metadata } from 'next';
import talksData from '@/data/talks';
import { Calendar } from 'lucide-react';
import EmptyState from '@/components/EmptyState';
import TalkCard from '@/components/TalkCard';

export const metadata: Metadata = {
  title: 'Programação | DevOpsDays Belém 2025',
  description: 'Confira a programação completa do DevOpsDays Belém 2025 com palestras, workshops e atividades.',
};

export default function ProgramPage ()  {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  if (talksData.talks.length === 0) {
    return (
      <EmptyState
        title="Programação"
      />
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Programação</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira a programação completa do DevOpsDays Belém 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-8 text-primary">
              <Calendar className="w-6 h-6 mr-2" />
              <h2 className="text-2xl font-bold">{formatDate(talksData.talks[0].date)}</h2>
            </div>

            {talksData.talks.map((talk) => (
              <TalkCard 
                key={talk.id}
                talk={talk}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};