import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import TeamMembers from '@/components/TeamMembers';

export const metadata: Metadata = {
  title: 'Contato | DevOpsDays Belém 2025',
  description: 'Entre em contato com a organização do DevOpsDays Belém 2025.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contato</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre em contato com a organização do DevOpsDays Belém 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Entre em Contato</h2>

            <p className="text-gray-700 mb-6">
              Tem alguma dúvida sobre o evento? Quer saber mais sobre patrocínios ou como participar? Entre em contato conosco e teremos prazer em ajudar.
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <a
                  href="mailto:belem@devopsdays.org"
                  className="text-blue-600 hover:underline"
                >
                  belem@devopsdays.org
                </a>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1">Twitter</h3>
                <a
                  href="https://twitter.com/tasafo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @tasafo
                </a>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-gray-700">
                Para assuntos relacionados ao código de conduta ou para reportar problemas durante o evento, por favor entre em contato imediatamente com a equipe organizadora.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Perguntas Frequentes</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-1">Como posso me inscrever?</h3>
                <p className="text-gray-700 mb-3">
                  As inscrições podem ser feitas através da plataforma Sympla. Clique no botão abaixo para acessar a página de inscrição.
                </p>
                <Button asChild className="bg-primary hover:bg-primary-dark text-white">
                  <a href="https://www.sympla.com.br/evento/devopsdays-belem-2025/2818140" target="_blank" rel="noopener noreferrer">
                    Inscreva-se
                  </a>
                </Button>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1">Como posso submeter uma palestra?</h3>
                <p className="text-gray-700 mb-3">
                  As submissões de palestras são feitas através da plataforma PaperCall. O período de submissão é de 01/03/2025 até 14/04/2025.
                </p>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <a href="https://www.papercall.io/devopsdays-belem-2025" target="_blank" rel="noopener noreferrer">
                    Submeta sua Palestra
                  </a>
                </Button>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1">Como posso me tornar um patrocinador?</h3>
                <p className="text-gray-700">
                  Temos diversos níveis de patrocínio disponíveis. Para mais informações, visite nossa página de <a href="/patrocinio" className="text-blue-600 hover:underline">Patrocínio</a> ou entre em contato conosco diretamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <TeamMembers />
    </div>
  );
} 