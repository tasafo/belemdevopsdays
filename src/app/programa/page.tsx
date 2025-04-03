import React from 'react';
import type { Metadata } from 'next';
import Program from './Program';

export const metadata: Metadata = {
  title: 'Programa | DevOpsDays Belém 2025',
  description: 'Confira a programação completa do DevOpsDays Belém 2025 com palestras, workshops e atividades.',
};

export default function ProgramPage() {
  return <Program />;
} 