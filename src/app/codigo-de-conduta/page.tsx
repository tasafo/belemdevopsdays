import React from 'react';
import type { Metadata } from 'next';
import CodeOfConduct from './CodeOfConduct';

export const metadata: Metadata = {
  title: 'Código de Conduta | DevOpsDays Belém 2025',
  description: 'Confira o código de conduta do DevOpsDays Belém 2025. Todos os participantes devem seguir estas diretrizes.',
};

export default function CodeOfConductPage() {
  return <CodeOfConduct />;
} 