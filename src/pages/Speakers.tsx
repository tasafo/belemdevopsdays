
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Github } from 'lucide-react';
import SponsorsSection from '@/components/SponsorsSection';
import CallToAction from '@/components/CallToAction';

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
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
                  
                  <div className="flex items-center justify-between">
                    <Link to={`/palestrantes/${speaker.id}`}>
                      <Button className="bg-primary hover:bg-primary-dark text-white">
                        Ver Perfil
                      </Button>
                    </Link>
                    
                    <div className="flex space-x-3">
                      {speaker.social.twitter && (
                        <a href={`https://twitter.com/${speaker.social.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                          <Twitter size={20} />
                        </a>
                      )}
                      {speaker.social.linkedin && (
                        <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                          <Linkedin size={20} />
                        </a>
                      )}
                      {speaker.social.github && (
                        <a href={speaker.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <SponsorsSection />
      <CallToAction />
    </div>
  );
};

export default Speakers;
