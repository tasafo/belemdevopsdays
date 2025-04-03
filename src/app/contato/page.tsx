import React from 'react';
import type { Metadata } from 'next';
import Contact from './Contact';

export const metadata: Metadata = {
  title: 'Contato | DevOpsDays Belém 2025',
  description: 'Entre em contato com a organização do DevOpsDays Belém 2025.',
};

export default function ContactPage() {
  return <Contact />;
} 