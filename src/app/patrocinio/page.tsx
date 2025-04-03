import React from 'react';
import type { Metadata } from 'next';
import Sponsors from '@/src/app/pages/Sponsors';

export const metadata: Metadata = {
  title: 'Patrocínio | DevOpsDays Belém 2025',
  description: 'Saiba como patrocinar o DevOpsDays Belém 2025 e as vantagens de cada plano de patrocínio.',
};

export default function SponsorsPage() {
  return <Sponsors />;
} 