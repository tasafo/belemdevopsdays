import React from 'react';
import type { Metadata } from 'next';
import SpeakerDetail from '../SpeakerDetail';
import speakers from '@/data/speakers';

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return speakers.speakers.map((speaker) => ({
    id: speaker.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const speaker = speakers.speakers.find(s => s.id === params.id);
  
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
  return <SpeakerDetail id={params.id} />;
} 