
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

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

const Speakers = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchSpeakers = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/speakers.json');
        const data = await response.json();
        setSpeakers(data.speakers || []);
      } catch (error) {
        console.error('Error fetching speakers:', error);
        setSpeakers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Palestrantes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os especialistas que irão compartilhar seu conhecimento no DevOpsDays Belém 2025
          </p>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square bg-gray-200"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/4"></div>
                  <div className="h-16 bg-gray-200 rounded"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <div className="aspect-square bg-gray-200 relative">
                  <img 
                    src={speaker.photo} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-xl mb-1">{speaker.name}</h2>
                  <p className="text-gray-600 mb-3">{speaker.company}</p>
                  <p className="text-gray-700 line-clamp-3 mb-4">{speaker.bio}</p>
                  <Link to={`/palestrantes/${speaker.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                      Ver Perfil
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Speakers;
