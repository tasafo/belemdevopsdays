'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react';
import sponsors from '@/data/sponsors';
import event from '@/data/event';

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Patrocínio</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Conheça as empresas que estão apoiando o DevOpsDays Belém 2025
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Por que patrocinar?</CardTitle>
            <CardDescription>Seja parte de um evento de tecnologia impactante</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Exposição para a comunidade de tecnologia da região Norte</li>
              <li>Oportunidade de recrutamento e networking</li>
              <li>Posicionamento da sua marca como apoiadora de iniciativas de tecnologia</li>
              <li>Contribuição para o desenvolvimento tecnológico regional</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <a 
                href={`mailto:${event.social.email}?subject=Interesse em Patrocínio - DevOpsDays Belém 2025`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Entre em contato <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Planos de Patrocínio</CardTitle>
            <CardDescription>Escolha o plano que melhor atende sua empresa</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sponsors.sponsor_levels
                .filter(level => level.id !== 'community' && level.id !== 'support')
                .map(level => (
                  <div key={level.id} className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">{level.label}</span>
                    <span>{level.amount}</span>
                  </div>
                ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <a 
                href="#current-sponsors" 
                className="flex items-center"
              >
                Ver patrocinadores atuais
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div id="current-sponsors">
        {sponsors.sponsor_levels.map(level => (
          level.sponsors.length > 0 && (
            <div key={level.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">{level.label}</h2>
              <div className={`grid grid-cols-1 ${level.id === 'diamante' ? 'md:grid-cols-2' : level.id === 'community' || level.id === 'support' ? 'md:grid-cols-3 lg:grid-cols-4' : 'md:grid-cols-3'} gap-8`}>
                {level.sponsors.map(sponsor => (
                  <a 
                    key={sponsor.id}
                    href={sponsor.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-[200px] transition-transform hover:scale-105"
                  >
                    <div className="relative h-24 w-full">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="mt-4 text-center font-medium">{sponsor.name}</h3>
                  </a>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Sponsors; 