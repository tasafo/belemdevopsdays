import React from 'react';
import type { Metadata } from 'next';
import speakers from '@/data/speakers';
import talks from '@/data/talks';
import Image from 'next/image';
import { Twitter, Linkedin, Github, Mail, Calendar, Instagram } from 'lucide-react';
import Link from 'next/link';

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  if (!speakers || speakers.length === 0) {
    return [{ id: 'placeholder' }];
  }
  
  return speakers.map((speaker) => ({
    id: speaker.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const speaker = speakers.find(s => s.id === params.id);

  if (!speaker) {
    return {
      title: 'Palestrante não encontrado | DevOpsDays Belém 2025'
    };
  }

  return {
    title: `${speaker.name} | Palestrante | DevOpsDays Belém 2025`,
    description: `Conheça mais sobre ${speaker.name}, palestrante do DevOpsDays Belém 2025.`
  };
}

export default function SpeakerDetailPage({ params }: Props) {
  const { id } = params;
  const speaker = speakers.find((s) => s.id === id);
  const speakerTalks = talks.talks.filter((talk) => talk.speaker_id === id);

  if (!speaker) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] py-12">
        <h1 className="text-2xl font-bold mb-4">Palestrante não encontrado</h1>
        <p>O palestrante que você está procurando não existe ou foi removido.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Palestrante</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça o palestrante
          </p>
          <Link
            href="/palestrantes"
            className="text-primary hover:underline inline-flex items-center"
          >
            ← Voltar para a lista de palestrantes
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <Image
                  src={speaker.photo || '/placeholder.svg'}
                  alt={speaker.name}
                  fill
                  className="rounded-full object-cover border-4 border-primary"
                />
              </div>
              <h1 className="text-2xl font-bold text-center mb-2">{speaker.name}</h1>
              <p className="text-muted-foreground text-center mb-4">{speaker.company}</p>

              <div className="flex space-x-3 mt-2">
                {speaker.social.twitter && (
                  <a href={`https://twitter.com/${speaker.social.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                    <Twitter size={24} />
                  </a>
                )}
                {speaker.social.linkedin && (
                  <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                    <Linkedin size={24} />
                  </a>
                )}
                {speaker.social.instagram && (
                  <a href={speaker.social.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                    <Instagram size={24} />
                  </a>
                )}
                {speaker.social.github && (
                  <a href={speaker.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
                    <Github size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Biografia</h2>
              <p className="text-gray-700">{speaker.bio}</p>
            </div>

            {speakerTalks.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Palestras</h2>
                <div className="space-y-4">
                  {speakerTalks.map((talk) => (
                    <div key={talk.id} className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-lg">{talk.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Calendar size={16} className="mr-1" />
                        <span>{talk.time} · {new Date(talk.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      {talk.description && (
                        <p className="mt-2 text-gray-700">{talk.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};