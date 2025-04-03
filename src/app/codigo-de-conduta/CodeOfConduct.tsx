'use client';

import { useEffect } from 'react';

const CodeOfConduct = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Código de Conduta</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead">
            Todos os participantes, palestrantes, patrocinadores e voluntários do nosso evento precisam concordar com este código de conduta. 
            Os organizadores vão reforçar que este código seja seguido durante todo o evento. 
            Esperamos a cooperação de todos os participantes para ajudar a garantir um ambiente seguro para todos.
          </p>
          
          <h2>Versão Rápida</h2>
          <p>
            Nossa conferência é dedicada a fornecer uma experiência livre de assédio para todos, independentemente de gênero, identidade de gênero e expressão, 
            idade, orientação sexual, deficiência, aparência física, tamanho corporal, raça, etnia, religião (ou falta dela), 
            ou escolhas de tecnologias. Nós não toleramos o assédio dos participantes da conferência, sob qualquer forma. 
            Linguagem e imagens sexuais não são apropriadas em nenhum local da conferência, incluindo palestras, workshops, festas, 
            Twitter e outras mídias on-line. Os participantes que violarem estas regras poderão ser punidos ou expulsos da conferência sem restituição, 
            a critério dos organizadores da conferência.
          </p>
          
          <h2>Versão Detalhada</h2>
          <p>
            Assédio inclui comentários verbais ofensivos relacionados a gênero, identidade de gênero e expressão, idade, orientação sexual, 
            deficiência, aparência física, tamanho corporal, raça, etnia, religião, escolhas de tecnologias, imagens sexuais em espaços públicos, 
            intimidação deliberada, perseguição, stalking, fotografias ou gravações que gerem embaraço, contato físico inadequado, e atenção sexual indesejada.
          </p>
          
          <p>
            Os participantes que receberem uma solicitação para interromper qualquer comportamento de assédio devem cumprir imediatamente.
          </p>
          
          <p>
            Os patrocinadores também estão sujeitos às políticas anti-assédio. Em particular, os patrocinadores não devem usar imagens, 
            atividades ou outro material de cunho sexual. As equipes de estandes e tendas (incluindo voluntários) não devem utilizar 
            roupas, uniformes ou trajes sexualizados, ou de outra forma criar um ambiente sexualizado.
          </p>
          
          <p>
            Se um participante se envolve em comportamento de assédio, os organizadores da conferência podem tomar todas as medidas 
            que considerarem adequadas, incluindo avisar o ofensor ou expulsá-lo da conferência sem nenhum reembolso.
          </p>
          
          <p>
            Caso seja assediado, perceba que alguém está sendo assediado, ou tenha alguma dúvida, entre em contato com um membro da equipe 
            da conferência imediatamente. As pessoas da equipe da conferência podem ser identificadas pelas camisas com a marca do evento.
          </p>
          
          <p>
            A equipe da conferência estará disposta a auxiliar os participantes a contatarem a segurança do local, assim como aplicar a 
            lei local, fornecer escoltas, ou ajudar aqueles que sofrerem assédio para que se sintam seguros durante a conferência. 
            Nós valorizamos a sua participação.
          </p>
          
          <p>
            Esperamos que os participantes sigam estas regras em todos os locais de eventos relacionados à conferência.
          </p>
          
          <hr className="my-8" />
          
          <p className="text-sm text-muted-foreground">
            <em>
              O código de conduta DevOpsDays é baseado no código de conduta da 
              <a href="https://confcodeofconduct.com" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                {' '}Conference Code of Conduct
              </a>
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
