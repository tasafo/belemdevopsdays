'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ScheduleHighlights from '@/components/ScheduleHighlights';
import FeaturedSpeakers from '@/components/FeaturedSpeakers';
import LocationSection from '@/components/LocationSection';
import FAQSection from '@/components/FAQSection';
import TeamMembers from '@/components/TeamMembers';

const Index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
};

export default Index; 