import { useState, useEffect, ReactNode } from 'react';
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
import { Card } from "@/components/ui/card";

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sponsorLevels = [
    { name: 'Safo¹', status: 'Disponível', tickets: '(preço especial)¹', space: '-', websiteLogo: '✓', marketingLogo: '-', bannerHighlight: '-', marketingKit: '-', socialMedia: '✓' },
    { name: 'Bronze', status: 'Disponível', tickets: '1', space: '-', websiteLogo: '✓', marketingLogo: '-', bannerHighlight: '-', marketingKit: '-', socialMedia: '✓' },
    { name: 'Prata', status: 'Disponível', tickets: '3', space: '-', websiteLogo: '✓', marketingLogo: '✓', bannerHighlight: '-', marketingKit: '✓', socialMedia: '✓' },
    { name: 'Ouro', status: 'Disponível', tickets: '5', space: '-', websiteLogo: '✓', marketingLogo: '✓', bannerHighlight: '-', marketingKit: '✓', socialMedia: '✓' },
    { name: 'Platina', status: 'Disponível', tickets: '10', space: '-', websiteLogo: '✓', marketingLogo: '✓', bannerHighlight: '✓', marketingKit: '✓', socialMedia: '✓' },
    { name: 'Diamante', status: 'Disponível', tickets: '15', space: '✓', websiteLogo: '✓', marketingLogo: '✓', bannerHighlight: '✓', marketingKit: '✓', socialMedia: '✓' },
    { name: 'Comunidade²', status: 'Disponível', tickets: '-', space: '-', websiteLogo: '✓', marketingLogo: '-', bannerHighlight: '-', marketingKit: '-', socialMedia: '✓' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12">
          <div className="bg-white p-8">
            <h2 className="text-4xl font-bold mb-6 text-primary">Seja nosso parceiro</h2>
            <p className="text-gray-700 mb-6 text-left">
              Profissionais de tecnologia irão participar do evento. Esta é uma ótima oportunidade para encontrar os melhores talentos, fazer demonstração dos seus produtos/serviços e tornar sua marca ainda mais conhecida. Também encorajamos nossos parceiros a sugerir temas para as <i>sessões interativas</i>, discussões abertas para tópicos relevantes. <b>Queremos que nossos parceiros se envolvam no evento!</b>
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 text-left">
              <p className="text-gray-700">
                Se você está interessado em um patrocínio especial ou tem uma ideia criativa sobre como pode apoiar o evento, mande um email para nós: <a href="mailto:belem@devopsdays.org" className="text-blue-600 hover:underline">belem@devopsdays.org</a>
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-primary">Níveis de patrocínio</h2>
            
            {/* Mobile View */}
            <div className="md:hidden space-y-6">
              {sponsorLevels.map((level, index) => (
                <Card key={index} className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2">{level.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">{level.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Inscrições:</span>
                      <span>{level.tickets}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Espaço para divulgação:</span>
                      <span>{level.space}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Logo no site:</span>
                      <span>{level.websiteLogo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Logo marketing:</span>
                      <span>{level.marketingLogo}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Destaque Banner:</span>
                      <span>{level.bannerHighlight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Material marketing:</span>
                      <span>{level.marketingKit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Redes Sociais:</span>
                      <span>{level.socialMedia}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead className="whitespace-nowrap">Benefícios</TableHead>
                    {sponsorLevels.map((level, index) => (
                      <TableHead key={index} className="text-center whitespace-nowrap">{level.name}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Status</TableCell>
                    {sponsorLevels.map((level, index) => (
                      <TableCell key={index} className="text-center">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">{level.status}</span>
                      </TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Inscrições para o evento</TableCell>
                    {sponsorLevels.map((level, index) => (
                      <TableCell key={index} className="text-center">{level.tickets}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Espaço para divulgação no local</TableCell>
                    {sponsorLevels.map((level, index) => (
                      <TableCell key={index} className="text-center">{level.space}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Logo no site do evento</TableCell>
                    {sponsorLevels.map((level, index) => (
                      <TableCell key={index} className="text-center">{level.websiteLogo}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Logo nos materiais de marketing</TableCell>
                    {sponsorLevels.map((level, index) => (
                      <TableCell key={index} className="text-center">{level.marketingLogo}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Destaque no Banner</TableCell>
                    {sponsorLevels.map((level, index) => (
                      <TableCell key={index} className="text-center">{level.bannerHighlight}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Material de marketing nos kits</TableCell>
                    {sponsorLevels.map((level, index) => (
                      <TableCell key={index} className="text-center">{level.marketingKit}</TableCell>
                    ))}
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium whitespace-nowrap">Divulgação nas Redes Sociais</TableCell>
                    {sponsorLevels.map((level, index) => (
                      <TableCell key={index} className="text-center">{level.socialMedia}</TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 text-sm text-left">
              <p>¹ Essa cota é válida apenas para empresas e iniciativas locais. O preço do ingresso para os patrocinadores será o mesmo valor do ingresso para estudantes com direito a até 3 ingressos (os nomes e emails das pessoas que serão contempladas com esses ingressos devem ser enviados a organização do evento para checagem na hora do credenciamento).</p>
              <p>² Patrocinadores que irão apoiar e divulgar o evento na comunidade que representam.</p>
            </div>
          </div>
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
      </div>
    </div>
  );
};

export default Sponsors;
