
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

const Sponsors = () => {
  const [sponsorLevels, setSponsorLevels] = useState<SponsorLevel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchSponsors = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/sponsors.json');
        const data = await response.json();
        setSponsorLevels(data.sponsor_levels || []);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
        setSponsorLevels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Patrocínio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as empresas que estão apoiando o DevOpsDays Belém 2025
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-primary">Seja nosso parceiro</h2>
            <p className="text-gray-700 mb-6">
              Profissionais de tecnologia irão participar do evento. Esta é uma ótima oportunidade para encontrar os melhores talentos, fazer demonstração dos seus produtos/serviços e tornar sua marca ainda mais conhecida. Também encorajamos nossos parceiros a sugerir temas para as <i>sessões interativas</i>, discussões abertas para tópicos relevantes. <b>Queremos que nossos parceiros se envolvam no evento!</b>
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <p className="text-gray-700">
                Se você está interessado em um patrocínio especial ou tem uma ideia criativa sobre como pode apoiar o evento, mande um email para nós: <a href="mailto:belem@devopsdays.org" className="text-blue-600 hover:underline">belem@devopsdays.org</a>
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-6 text-primary">Níveis de Patrocínio</h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead className="whitespace-nowrap">Benefícios</TableHead>
                    <TableHead className="text-center whitespace-nowrap">Safo¹</TableHead>
                    <TableHead className="text-center whitespace-nowrap">Bronze</TableHead>
                    <TableHead className="text-center whitespace-nowrap">Prata</TableHead>
                    <TableHead className="text-center whitespace-nowrap">Ouro</TableHead>
                    <TableHead className="text-center whitespace-nowrap">Platina</TableHead>
                    <TableHead className="text-center whitespace-nowrap">Diamante</TableHead>
                    <TableHead className="text-center whitespace-nowrap">Comunidade²</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Status</TableCell>
                    <TableCell className="text-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Disponível</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Disponível</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Disponível</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Disponível</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Disponível</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Disponível</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Disponível</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Inscrições para o evento</TableCell>
                    <TableCell className="text-center">(preço especial)¹</TableCell>
                    <TableCell className="text-center">1</TableCell>
                    <TableCell className="text-center">3</TableCell>
                    <TableCell className="text-center">5</TableCell>
                    <TableCell className="text-center">10</TableCell>
                    <TableCell className="text-center">15</TableCell>
                    <TableCell className="text-center">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Espaço para divulgação no local</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Logo no site do evento</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Logo nos materiais de marketing</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Destaque no Banner</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Material de marketing nos kits</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">-</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Divulgação nas Redes Sociais</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                    <TableCell className="text-center">✓</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-6 text-sm">
              <p>¹ Essa cota é válida apenas para empresas e iniciativas locais. O preço do ingresso para os patrocinadores será o mesmo valor do ingresso para estudantes com direito a até 3 ingressos (os nomes e emails das pessoas que serão contempladas com esses ingressos devem ser enviados a organização do evento para checagem na hora do credenciamento).</p>
              <p>² Patrocinadores que irão apoiar e divulgar o evento na comunidade que representam.</p>
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Nossos Patrocinadores
            </h2>
            
            <div className="space-y-16">
              {sponsorLevels.map((level) => (
                <div key={level.id}>
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    {level.label}
                  </h3>
                  
                  {level.sponsors.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-12">
                      {level.sponsors.map((sponsor) => (
                        <a 
                          key={sponsor.id}
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:opacity-80 transition-opacity"
                        >
                          <img 
                            src={sponsor.logo} 
                            alt={sponsor.name} 
                            className="max-h-28 max-w-full mx-auto"
                          />
                          <p className="mt-2 text-center text-gray-700">{sponsor.name}</p>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-8">
                      <Link to="/patrocinio" className="text-gray-500 hover:text-primary transition-colors">
                        Seja o primeiro patrocinador desta categoria!
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-20">
              <p className="text-xl text-gray-700 mb-6">
                Interessado em patrocinar o DevOpsDays Belém 2025?
              </p>
              <a href="mailto:belem@devopsdays.org">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Entre em Contato
                </Button>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sponsors;
