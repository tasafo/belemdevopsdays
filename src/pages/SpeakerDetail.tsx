
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';

interface Speaker {
  id: string;
  name: string;
  bio: string;
  company: string;
  photo: string;
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}

interface Talk {
  id: string;
  title: string;
  speaker_id: string;
  time: string;
  description: string;
}

const SpeakerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [speaker, setSpeaker] = useState<Speaker | null>(null);
  const [talks, setTalks] = useState<Talk[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpeakerAndTalks = async () => {
      try {
        setLoading(true);
        // Fetch speaker
        const speakersResponse = await fetch('/data/speakers.json');
        const speakersData = await speakersResponse.json();
        const speakerData = speakersData.speakers.find((s: Speaker) => s.id === id) || null;
        setSpeaker(speakerData);

        // Fetch talks
        if (speakerData) {
          const talksResponse = await fetch('/data/talks.json');
          const talksData = await talksResponse.json();
          const speakerTalks = talksData.days.flatMap((day: any) => 
            day.talks.filter((talk: any) => talk.speaker_id === id)
          );
          setTalks(speakerTalks);
        }
      } catch (error) {
        console.error('Error fetching speaker data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSpeakerAndTalks();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!speaker) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Palestrante não encontrado</h1>
            <p className="mb-6">O palestrante que você está procurando não existe.</p>
            <Link to="/palestrantes">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Palestrantes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/palestrantes">
            <Button variant="ghost" className="text-primary hover:bg-primary-light/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Palestrantes
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="aspect-square bg-gray-200 relative">
                <img 
                  src={speaker.photo} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-1">{speaker.name}</h1>
                <p className="text-gray-600 mb-4">{speaker.company}</p>
                
                <div className="flex space-x-4 mt-4">
                  {speaker.social.twitter && (
                    <a 
                      href={`https://twitter.com/${speaker.social.twitter}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      Twitter
                    </a>
                  )}
                  {speaker.social.linkedin && (
                    <a 
                      href={speaker.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900"
                    >
                      LinkedIn
                    </a>
                  )}
                  {speaker.social.github && (
                    <a 
                      href={speaker.social.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-black"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Biografia</h2>
              <p className="text-gray-700 mb-8 whitespace-pre-line">{speaker.bio}</p>
              
              {talks.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-primary">Palestras</h2>
                  <div className="space-y-6">
                    {talks.map((talk) => (
                      <div key={talk.id} className="border-l-4 border-primary pl-4 py-1">
                        <div className="text-secondary-dark font-medium mb-1">
                          {talk.time}
                        </div>
                        <h3 className="font-bold text-xl mb-2">{talk.title}</h3>
                        <p className="text-gray-700">{talk.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetail;
