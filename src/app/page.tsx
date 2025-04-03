import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ScheduleHighlights from '@/components/ScheduleHighlights';
import FeaturedSpeakers from '@/components/FeaturedSpeakers';
import LocationSection from '@/components/LocationSection';
import FAQSection from '@/components/FAQSection';
import TeamMembers from '@/components/TeamMembers';

export const metadata: Metadata = {
  title: 'DevOpsDays Belém 2025',
  description: 'O maior evento de DevOps da região Norte. Palestras, networking e muito conhecimento.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ScheduleHighlights />
      <FeaturedSpeakers />
      <LocationSection />
      <FAQSection />
      <TeamMembers />
    </div>
  );
} 