import React from 'react';
import type { Metadata } from 'next';
import Sponsors from './Sponsors';

export const metadata: Metadata = {
  title: 'Patrocínio | DevOpsDays Belém 2025',
  description: 'Conheça as empresas que estão apoiando o DevOpsDays Belém 2025 e saiba como se tornar um patrocinador.',
};

export default function SponsorsPage() {
  return <Sponsors />;
} 