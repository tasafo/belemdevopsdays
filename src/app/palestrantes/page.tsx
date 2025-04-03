import React from 'react';
import type { Metadata } from 'next';
import Speakers from './Speakers';

export const metadata: Metadata = {
  title: 'Palestrantes | DevOpsDays Belém 2025',
  description: 'Conheça os palestrantes do DevOpsDays Belém 2025, suas experiências e o que vão compartilhar.',
};

export default function SpeakersPage() {
  return <Speakers />;
} 