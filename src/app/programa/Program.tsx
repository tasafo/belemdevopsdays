'use client';

import { useEffect } from 'react';
import ProgramHeader from '@/components/ProgramHeader';
import ProgramSchedule from '@/components/ProgramSchedule';
import talks from '@/data/talks';

const Program = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <ProgramHeader />
      <ProgramSchedule talks={talks.talks} tracks={talks.tracks} />
    </div>
  );
};

export default Program;
