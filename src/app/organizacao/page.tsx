import React from 'react';
import type { Metadata } from 'next';
import teamMembers from '@/data/teamMembers';
import OrganizadorCard from '@/components/OrganizadorCard';

export const metadata: Metadata = {
  title: 'Organização | DevOpsDays Belém 2025',
  description: 'Conheça os organizadores do DevOpsDays Belém 2025.',
};

export default function OrganizacaoPage ()  {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Organização</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os organizadores do DevOpsDays Belém 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <OrganizadorCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};