
import { useState, useEffect, useRef } from 'react';

interface Location {
  venue: string;
  address: string;
  city: string;
  state: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
}

const LocationSection = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('/data/location.json');
        const data = await response.json();
        setLocation(data);
      } catch (error) {
        console.error('Error fetching location:', error);
        setLocation(null);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (!location) return null;

  const mapUrl = `https://maps.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&z=15&output=embed`;

  return (
    <section id="location" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2">
            Local do Evento
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Confira onde acontecerá o DevOpsDays Belém 2025
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-80">
                <iframe 
                  src={mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-2xl mb-4">{location.venue}</h3>
              
              {location.address ? (
                <p className="text-gray-700 mb-4">
                  {location.address}<br />
                  {location.city}, {location.state}<br />
                  {location.country}
                </p>
              ) : (
                <p className="text-gray-700 mb-4">
                  {location.city}, {location.state}<br />
                  {location.country}
                </p>
              )}
              
              <p className="text-gray-700">{location.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
