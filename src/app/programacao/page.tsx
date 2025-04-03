import React from 'react';
import type { Metadata } from 'next';
import talksData from '@/data/talks';
import speakersData from '@/data/speakers';
import { Calendar } from 'lucide-react';
import EmptyState from '@/components/EmptyState';

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

  const getSpeakerName = (speakerId: string) => {
    const speaker = speakersData.speakers.find(s => s.id === speakerId);
    return speaker ? speaker.name : '';
  };

  const getSpeakerCompany = (speakerId: string) => {
    const speaker = speakersData.speakers.find(s => s.id === speakerId);
    return speaker ? speaker.company : '';
  };

  const handleSubmitTalk = () => {
    window.location.href = 'https://www.papercall.io/devopsdaysbelem2025';
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

            {talksData.talks.map((talk) => {
              const isTalk = talk.type === 'talk';
              const isBreak = talk.type === 'break';

              return (
                <div
                  key={talk.id}
                  className={`p-6 rounded-lg ${isBreak
                    ? 'bg-gray-100 border-l-4 border-gray-400'
                    : isTalk
                      ? 'bg-white shadow-md border-l-4 border-primary'
                      : 'bg-accent border-l-4 border-secondary'
                    }`}
                >
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};