import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import speakers from '@/data/speakers';

export default function KeynoteSpeakers() {
  const keynoteSpeakers = speakers.filter(speaker => speaker.isKeynote);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">Keynote Speakers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Palestrantes principais que irão inspirar e compartilhar conhecimentos valiosos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {keynoteSpeakers.map((speaker) => (
            <div key={speaker.id} className="rounded-lg border text-card-foreground overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex flex-col items-center">
                  <div className="mb-6 w-48 h-48">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full w-full h-full border-4 border-primary/10">
                      <Image 
                        src={speaker.photo} 
                        alt={speaker.name} 
                        className="aspect-square h-full w-full object-cover"
                        width={192}
                        height={192}
                      />
                    </span>
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="inline-block bg-primary text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
                      {speaker.company}
                    </span>
                    <h3 className="font-bold text-2xl mb-1 text-gray-800">{speaker.name}</h3>
                    <p className="text-gray-600 font-medium">{speaker.role || 'Speaker'}</p>
                  </div>
                  
                  <div className="space-y-3 mb-4 text-left">
                    <p className="text-gray-600">{speaker.bio.substring(0, 350) + '...'}</p>
                  </div>
                  
                  <div className="mt-4">
                    <Link href={`/palestrantes/${speaker.id}`}>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-10 px-4 py-2 border-primary text-primary hover:bg-primary hover:text-white">
                        Perfil Completo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 