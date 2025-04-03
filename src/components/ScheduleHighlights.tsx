import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Talk {
  id: string;
  title: string;
  speaker_id: string;
  time: string;
  type: string;
  track: string;
  description: string;
}

interface Speaker {
  id: string;
  name: string;
  company: string;
}

interface Day {
  talks: Talk[];
}

interface TalksData {
  days: Day[];
}

const ScheduleHighlights = () => {
  const [highlights, setHighlights] = useState<(Talk & { speaker?: Speaker })[]>([]);

  useEffect(() => {
    const fetchTalksAndSpeakers = async () => {
      try {
        // Fetch talks
        const talksResponse = await fetch('/data/talks.json');
        const talksData = await talksResponse.json() as TalksData;
        
        // Fetch speakers
        const speakersResponse = await fetch('/data/speakers.json');
        const speakersData = await speakersResponse.json();
        
        // Filter talks of type "talk" only
        const allTalks = talksData.days.flatMap((day) => 
          day.talks.filter((talk) => talk.type === "talk")
        );
        
        // Randomly select 3 talks
        const shuffled = [...allTalks].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 3);
        
        // Map speakers to talks
        const talksWithSpeakers = selected.map((talk: Talk) => {
          const speaker = speakersData.speakers.find((s: Speaker) => s.id === talk.speaker_id);
          return { ...talk, speaker };
        });
        
        setHighlights(talksWithSpeakers);
      } catch (error) {
        console.error('Error fetching data:', error);
        setHighlights([]);
      }
    };

    fetchTalksAndSpeakers();
  }, []);

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
          <Link to="/programa">
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
