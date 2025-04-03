import React from 'react';
import type { Metadata } from 'next';
import Speakers from '@/src/app/pages/Speakers';

export const metadata: Metadata = {
  title: 'Palestrantes | DevOpsDays Belém 2025',
  description: 'Conheça os palestrantes do DevOpsDays Belém 2025, especialistas em DevOps, infraestrutura e desenvolvimento.',
};

export default function SpeakersPage() {
  return <Speakers />;
} 