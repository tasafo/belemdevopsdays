import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import speakersData, { Speaker } from '@/data/speakers';
import talksData, { Talk } from '@/data/talks';

const ScheduleHighlights = () => {
  const allTalks = talksData.talks.filter((talk) => talk.type === "talk");
  
  const shuffled = [...allTalks].sort(() => Math.random() - 0.5);
  const selectedTalks = shuffled.slice(0, 3);
  
  const talksWithSpeakers = selectedTalks.map((talk: Talk) => {
    const speaker = speakersData.speakers.find((s: Speaker) => s.id === talk.speaker_id);
    return { ...talk, speaker };
  });

  const [highlights] = useState<(Talk & { speaker?: Speaker })[]>(talksWithSpeakers);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2">
          Programação
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Confira algumas das palestras que você encontrará no evento
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((talk) => (
            <Card key={talk.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-secondary-dark font-medium mb-2">
                  {talk.time}
                </div>
                <h3 className="font-bold text-xl mb-3">{talk.title}</h3>
                {talk.speaker && (
                  <p className="text-gray-600 mb-3">
                    {talk.speaker.name} • {talk.speaker.company}
                  </p>
                )}
                <p className="text-gray-700 mb-4">{talk.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/programa">
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Ver programação completa
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScheduleHighlights;
