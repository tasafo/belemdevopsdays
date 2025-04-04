import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import sponsorsData from '@/data/sponsors';

interface Sponsor {
  id: string;
  name: string;
  url: string;
  logo: string;
}

interface SponsorLevel {
  id: string;
  label: string;
  amount: string;
  sponsors: Sponsor[];
}

const SponsorsSection = () => {
  const sponsorLevels = sponsorsData.sponsor_levels || [];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-2">
          Patrocinadores
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Conheça as empresas que estão apoiando o DevOpsDays Belém 2025
        </p>
        
        {/* Sponsors displayed vertically */}
        <div className="space-y-16">
          {sponsorLevels.map((level) => (
            <div key={level.id} className="text-center">
              <h3 className="text-xl font-bold mb-6 text-primary-dark">{level.label}</h3>
              
              {level.sponsors.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-10">
                  {level.sponsors.map((sponsor) => (
                    <a 
                      key={sponsor.id}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-48 hover:opacity-80 hover:scale-110 transition-transform duration-300"
                    >
                      <div className="h-24 w-48 mx-auto flex items-center justify-center bg-opacity-80 bg-white rounded-xl p-4">
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name} 
                          className="max-h-20 max-w-40 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="mt-2 text-gray-700 text-center text-sm truncate">{sponsor.name}</p>
                    </a>
                  ))}
                </div>
              ) : (
                <Link href="/patrocinio" className="block p-8 text-gray-500 hover:text-primary transition-colors">
                  Seja o primeiro patrocinador desta categoria!
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/patrocinio">
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Torne-se um patrocinador
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
