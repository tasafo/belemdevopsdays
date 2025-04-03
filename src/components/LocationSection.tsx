
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

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
        
        // Override with Patio Belém coordinates
        const patioBelem = {
          ...data,
          venue: "Shopping Pátio Belém",
          address: "Travessa Padre Eutíquio, 1078 - Batista Campos",
          coordinates: {
            lat: -1.4516813,
            lng: -48.4809826
          },
          description: "O evento será realizado no Shopping Pátio Belém, localizado no coração da cidade, com fácil acesso por transporte público e amplo estacionamento."
        };
        
        setLocation(patioBelem);
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
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`;
  const uberUrl = `https://m.uber.com/ul/?action=setPickup&destination[latitude]=${location.coordinates.lat}&destination[longitude]=${location.coordinates.lng}&destination[nickname]=${encodeURIComponent(location.venue)}`;
  const moovitUrl = `https://moovit.com/?to=lat:${location.coordinates.lat}_lng:${location.coordinates.lng}&tll=${location.coordinates.lat}_${location.coordinates.lng}&customerId=4908&metroId=2288&lang=pt`;

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
              <div className="bg-gray-100 rounded-lg overflow-hidden h-80 relative">
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
                
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                  aria-label="Ver mapa completo"
                >
                  <ExternalLink size={20} className="text-primary" />
                </a>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <MapPin size={16} />
                    Google Maps
                  </Button>
                </a>
                <a href={uberUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Navigation size={16} />
                    Uber
                  </Button>
                </a>
                <a href={moovitUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Navigation size={16} />
                    Moovit
                  </Button>
                </a>
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
