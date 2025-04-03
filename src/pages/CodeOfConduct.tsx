
import { useEffect } from 'react';

const CodeOfConduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Código de Conduta</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose prose-lg max-w-none">
              <h2>Objetivo</h2>
              <p>
                O DevOpsDays Belém está comprometido em proporcionar uma experiência livre de assédio para todos os participantes, independentemente de gênero, orientação sexual, deficiência, aparência física, tamanho corporal, raça ou religião. Não toleramos o assédio dos participantes do evento sob qualquer forma. Linguagem e imagens sexuais não são apropriadas em nenhum local do evento, incluindo palestras, workshops, festas, Twitter e outras mídias online.
              </p>
              
              <p>
                Os participantes que violarem estas regras podem ser punidos ou expulsos do evento sem restituição a critério dos organizadores do evento.
              </p>
              
              <h2>Versão detalhada</h2>
              <p>
                O assédio inclui comentários verbais ofensivos relacionados a gênero, orientação sexual, deficiência, aparência física, tamanho corporal, raça, religião, imagens sexuais em espaços públicos, intimidação deliberada, perseguição, assédio fotográfico ou gravação, interrupção contínua de palestras ou outros eventos, contato físico inadequado e atenção sexual indesejada.
              </p>
              
              <p>
                Espera-se que os participantes solicitados a parar qualquer comportamento de assédio cumpram imediatamente.
              </p>
              
              <p>
                Os patrocinadores também estão sujeitos à política anti-assédio. Em particular, os patrocinadores não devem usar imagens, atividades ou outro material sexualizado. A equipe de estande (incluindo voluntários) não deve usar roupas/uniformes/fantasias sexualizadas, ou de outra forma criar um ambiente sexualizado.
              </p>
              
              <p>
                Se um participante se envolver em comportamento de assédio, os organizadores do evento podem tomar qualquer ação que considerem apropriada, incluindo advertir o infrator ou expulsão do evento sem reembolso.
              </p>
              
              <p>
                Se você estiver sendo assediado, notar que alguém está sendo assediado, ou tiver qualquer outra preocupação, entre em contato com um membro da equipe do evento imediatamente. A equipe do evento pode ser identificada por camisetas específicas.
              </p>
              
              <p>
                A equipe do evento estará feliz em ajudar os participantes a entrar em contato com a segurança do local ou a polícia local, fornecer escoltas ou ajudar aqueles que sofrem assédio a se sentirem seguros durante o evento. Valorizamos a sua participação.
              </p>
              
              <p>
                Esperamos que os participantes sigam estas regras em todos os locais do evento, festas relacionadas ao evento e mídias sociais.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <p>
                  <strong>Contato:</strong> Se você tiver alguma dúvida ou preocupação sobre o código de conduta, entre em contato com os organizadores do evento em <a href="mailto:belem@devopsdays.org" className="text-blue-600 hover:underline">belem@devopsdays.org</a>.
                </p>
              </div>
              
              <p className="text-sm mt-8">
                <em>Este Código de Conduta é baseado no <a href="https://confcodeofconduct.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Código de Conduta para Conferências</a>.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
