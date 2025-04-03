import React from 'react';
import type { Metadata } from 'next';
import SpeakerDetail from '@/src/app/pages/SpeakerDetail';
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
  const speaker = speakers.speakers.find((s) => s.id === params.id);
  
  return {
    title: speaker ? `${speaker.name} | DevOpsDays Belém 2025` : 'Palestrante | DevOpsDays Belém 2025',
    description: speaker?.bio || 'Conheça mais sobre nosso palestrante no DevOpsDays Belém 2025.',
  };
}

export default function SpeakerDetailPage({ params }: Props) {
  return <SpeakerDetail id={params.id} />;
} 