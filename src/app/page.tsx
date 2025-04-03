import React from 'react';
import type { Metadata } from 'next';
import Index from './pages/Index';

export const metadata: Metadata = {
  title: 'DevOpsDays Belém 2025',
  description: 'O maior evento de DevOps da região Norte. Palestras, networking e muito conhecimento.',
};

export default function Home() {
  return <Index />;
} 