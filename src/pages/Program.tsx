
import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import SponsorsSection from '@/components/SponsorsSection';
import CallToAction from '@/components/CallToAction';

interface Talk {
  id: string;
  title: string;
  speaker_id?: string;
  time: string;
  type: string;
  track: string;
  description?: string;
}

interface Speaker {
  id: string;
  name: string;
  company: string;
}

interface Day {
  date: string;
  talks: Talk[];
}

const Program = () => {
  const [days, setDays] = useState<Day[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch talks
        const talksResponse = await fetch('/data/talks.json');
        const talksData = await talksResponse.json();
        setDays(talksData.days || []);
        
        // Fetch speakers
        const speakersResponse = await fetch('/data/speakers.json');
        const speakersData = await speakersResponse.json();
        setSpeakers(speakersData.speakers || []);
      } catch (error) {
        console.error('Error fetching program data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  const getSpeakerName = (speakerId: string) => {
    const speaker = speakers.find(s => s.id === speakerId);
    return speaker ? speaker.name : '';
  };

  const getSpeakerCompany = (speakerId: string) => {
    const speaker = speakers.find(s => s.id === speakerId);
    return speaker ? speaker.company : '';
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Programação</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira a programação completa do DevOpsDays Belém 2025
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-pulse space-y-8 w-full max-w-4xl">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-24 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {days.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-center mb-8 text-primary">
                  <Calendar className="w-6 h-6 mr-2" />
                  <h2 className="text-2xl font-bold">{formatDate(days[0].date)}</h2>
                </div>
                
                {days[0].talks.map((talk) => {
                  const isTalk = talk.type === 'talk';
                  const isBreak = talk.type === 'break';
                  
                  return (
                    <div 
                      key={talk.id} 
                      className={`p-6 rounded-lg ${
                        isBreak 
                          ? 'bg-gray-100 border-l-4 border-gray-400' 
                          : isTalk 
                            ? 'bg-white shadow-md border-l-4 border-primary' 
                            : 'bg-accent border-l-4 border-secondary'
                      }`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="w-full md:w-1/6 font-medium text-gray-700">
                          {talk.time}
                        </div>
                        
                        <div className="w-full md:w-5/6">
                          <h3 className={`font-bold ${isTalk ? 'text-xl' : 'text-lg'} mb-2`}>
                            {talk.title}
                          </h3>
                          
                          {talk.speaker_id && (
                            <p className="text-gray-600 mb-3">
                              {getSpeakerName(talk.speaker_id)} • {getSpeakerCompany(talk.speaker_id)}
                            </p>
                          )}
                          
                          {talk.description && (
                            <p className="text-gray-700 mt-2">{talk.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
      
      <SponsorsSection />
      <CallToAction />
    </div>
  );
};

export default Program;
