import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NEXT_EDITION_URL = 'https://abicora.com/devopsdays-belem';

export const metadata: Metadata = {
  title: 'DevOpsDays Belém',
  description: 'As informações do DevOpsDays Belém 2026 estão em abicora.com/devopsdays-belem.',
};

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-50 to-white"></div>

      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col items-center text-center">
          <img
            src="/belemdevopsdays/logo.svg"
            alt="DevOpsDays Belém Logo"
            className="w-48 md:w-64 lg:w-80 mb-8"
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            DevOpsDays Belém
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl">
            As informações da edição de 2026 estão em um novo endereço.
          </p>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl">
            Acesse <span className="font-semibold text-primary">abicora.com/devopsdays-belem</span> para
            programação, inscrições e todas as novidades do evento.
          </p>

          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg mb-8">
            <a href={NEXT_EDITION_URL} target="_blank" rel="noopener noreferrer">
              Ir para o site do evento
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>

          <Link href="/home" className="text-primary hover:underline underline-offset-4">
            Ver o site da edição de 2025
          </Link>
        </div>
      </div>
    </div>
  );
}
