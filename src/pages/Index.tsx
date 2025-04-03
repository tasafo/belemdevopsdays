
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ScheduleHighlights from '@/components/ScheduleHighlights';
import FeaturedSpeakers from '@/components/FeaturedSpeakers';
import SponsorsSection from '@/components/SponsorsSection';
import LocationSection from '@/components/LocationSection';
import FAQSection from '@/components/FAQSection';
import CallToAction from '@/components/CallToAction';
import TeamMembers from '@/components/TeamMembers';
import ScrollReveal from '@/components/ScrollReveal';

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
      <SponsorsSection />
      <LocationSection />
      <FAQSection />
      <TeamMembers />
      <CallToAction />
      <ScrollReveal />
    </div>
  );
};

export default Index;
