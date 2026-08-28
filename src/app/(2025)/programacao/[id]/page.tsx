import React from 'react';
import type { Metadata } from 'next';
import talks from '@/data/talks';
import speakers from '@/data/speakers';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  if (!talks.talks || talks.talks.length === 0) {
    return [{ id: 'placeholder' }];
  }

  return talks.talks
    .filter(talk => talk.type === 'talk' || talk.type === 'keynote')
    .map((talk) => ({
      id: talk.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const talk = talks.talks.find(t => t.id === params.id);

  if (!talk) {
    return {
      title: 'Palestra não encontrada | DevOpsDays Belém 2025'
    };
  }

  return {
    title: `${talk.title} | Programação | DevOpsDays Belém 2025`,
    description: talk.description || `Confira detalhes sobre a palestra ${talk.title} no DevOpsDays Belém 2025.`
  };
}

export default function TalkDetailPage({ params }: Props) {
  const { id } = params;
  const talk = talks.talks.find((t) => t.id === id);

  if (!talk) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] py-12">
        <h1 className="text-2xl font-bold mb-4">Palestra não encontrada</h1>
        <p>A palestra que você está procurando não existe ou foi removida.</p>
      </div>
    );
  }

  const speaker = talk.speaker_id
    ? speakers.find((s) => s.id === talk.speaker_id)
    : null;

  const track = talks.tracks.find(t => t.id === talk.track);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Palestra</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira os detalhes da palestra
          </p>
          <Link
            href="/programacao"
            className="text-primary hover:underline inline-flex items-center"
          >
            ← Voltar para a programação completa
          </Link>
        </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{talk.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{talk.time}</span>
                </div>
                {track && (
                  <div className="flex items-center">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {track.name}
                    </span>
                  </div>
                )}
              </div>

              {talk.description && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-3">Descrição</h2>
                  <p className="text-gray-700 whitespace-pre-line">{talk.description}</p>
                </div>
              )}

              {speaker && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Palestrante</h2>
                  <Link href={`/palestrantes/${speaker.id}`} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="relative w-16 h-16 mr-4">
                      <Image
                        src={speaker.photo || '/placeholder.svg'}
                        alt={speaker.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{speaker.name}</h3>
                      <p className="text-gray-600">{speaker.company}</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
  );
} 