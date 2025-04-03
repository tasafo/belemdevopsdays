import React from 'react';
import type { Metadata } from 'next';
import CodeOfConduct from './CodeOfConduct';

export const metadata: Metadata = {
  title: 'Código de Conduta | DevOpsDays Belém 2025',
  description: 'Consulte o código de conduta do evento DevOpsDays Belém 2025.',
};

export default function CodeOfConductPage() {
  return <CodeOfConduct />;
} 