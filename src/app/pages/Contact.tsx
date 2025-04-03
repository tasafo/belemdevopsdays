'use client';

import { useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import event from '@/data/event';

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contato</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Entre em contato com a organização do DevOpsDays Belém 2025
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-center text-muted-foreground">
              <a 
                href={`mailto:${event.social.email}`} 
                className="hover:text-primary transition-colors"
              >
                {event.social.email}
              </a>
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Localização</h2>
            <p className="text-center text-muted-foreground">
              Belém, Pará<br />Brasil
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Social</h2>
            <p className="text-center text-muted-foreground">
              <a 
                href={`https://twitter.com/${event.social.twitter}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                @{event.social.twitter}
              </a>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Envie uma mensagem</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Assunto</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Assunto da mensagem"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Mensagem</label>
              <textarea 
                rows={6} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Sua mensagem aqui..."
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 