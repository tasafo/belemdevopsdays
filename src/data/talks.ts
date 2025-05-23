export interface Track {
  id: string;
  name: string;
}

export interface Talk {
  id: string;
  title: string;
  time: string;
  type: 'talk' |'keynote' | 'break' | 'other';
  track: string;
  date: string;
  speaker_id?: string;
  description?: string;
}

export interface TalksData {
  tracks: Track[];
  talks: Talk[];
}

const talks: TalksData = {
  "tracks": [
    {
      "id": "main",
      "name": "Palco Principal"
    }
  ],
  "talks": [
    {
      "id": "credenciamento-e-cafe-da-manha",
      "title": "Credenciamento e Café da Manhã",
      "time": "09:00",
      "type": "break",
      "track": "main",
      "date": "2025-06-07"
    },
    {
      "id": "abertura",
      "title": "Abertura",
      "time": "09:30",
      "type": "other",
      "track": "main",
      "date": "2025-06-07"
    },
    {
      "id": "keynote-abertura",
      "title": "Keynote de Abertura",
      "time": "09:45",
      "type": "keynote",
      "track": "main",
      "date": "2025-06-07"
    },
    {
      "id": "devops-career-2025",
      "title": "Desvendando a Carreira em DevOps: Tendências, Habilidades e Oportunidades 2025",
      "time": "10:35",
      "type": "talk",
      "track": "main",
      "date": "2025-06-07",
      "speaker_id": "levi-leopoldino",
      "description": "Nesta palestra, Levi Leopoldino (Levinux), fundador da DOUG BR, compartilha caminhos práticos para iniciar e crescer na carreira DevOps em 2025, com foco em inclusão, tendências do mercado, habilidades essenciais e oportunidades acessíveis como comunidades e certificações gratuitas — tudo com base em mais de 25 anos de experiência na área."
    },
    {
      "id": "kubevirt-gitops",
      "title": "Dos Silos à Automação: VMs no Kubernetes com KubeVirt e GitOps",
      "time": "11:05",
      "type": "talk",
      "track": "main",
      "date": "2025-06-07",
      "speaker_id": "allyson-brito",
      "description": "A palestra apresenta como o KubeVirt permite executar máquinas virtuais dentro do Kubernetes, integrando sistemas legados ao fluxo GitOps com Infraestrutura como Código (IaC). Com demonstrações práticas, mostra como automatizar, versionar e implantar VMs com ArgoCD, oferecendo uma solução moderna e unificada para ambientes híbridos sem reescrever código legado."
    },
    {
      "id": "almoco",
      "title": "Pausa para o Almoço",
      "time": "12:00",
      "type": "break",
      "track": "main",
      "date": "2025-06-07"
    },
    {
      "id": "devops-infraestruturas-publicas",
      "title": "DevOps de Infraestruturas Publicas Digitais: o desafio de orquestrar e manter seguros ambientes que escalam em nível populacional",
      "time": "13:30",
      "type": "talk",
      "track": "main",
      "date": "2025-06-07",
      "speaker_id": "marcelo-sa",
      "description": "A palestra apresenta os desafios técnicos e operacionais da Rede Belém Aberta, a primeira infraestrutura pública digital para educação com protocolo Beckn na América Latina. Serão abordadas estratégias de automação, observabilidade e segurança em ambientes que atendem a milhões, com foco em arquitetura, IaC e governança na nuvem pública para garantir resiliência, escalabilidade e compliance."
    },
    {
      "id": "infraestrutura-como-software",
      "title": "Infraestrutura como Software: O Futuro do Gerenciamento do Ciclo de Vida de Infraestruturas em Nuvem",
      "time": "14:30",
      "type": "talk",
      "track": "main",
      "date": "2025-06-07",
      "speaker_id": "lucas-alberto",
      "description": "Esta palestra apresenta o conceito de Infraestrutura como Software (IaS) como uma evolução do IaC, propondo um novo paradigma para gerenciar todo o ciclo de vida da infraestrutura em nuvem. Com foco em auto-recuperação, eliminação de drifts e maior resiliência a APIs instáveis, a sessão destaca o papel do Kubernetes, do operator pattern e de projetos como o Cluster API na construção de soluções cloud native mais robustas e adaptáveis."
    },
    {
      "id": "coffee-break",
      "title": "Coffee-break",
      "time": "15:00",
      "type": "break",
      "track": "main",
      "date": "2025-06-07"
    },
    {
      "id": "fishbowl",
      "title": "Fishbowl",
      "time": "15:40",
      "type": "other",
      "track": "main",
      "date": "2025-06-07"
    },
    {
      "id": "keynote-encerramento",
      "title": "Keynote de Encerramento",
      "time": "16:30",
      "type": "keynote",
      "track": "main",
      "date": "2025-06-07"
    },
    {
      "id": "encerramento-sorteios",
      "title": "Encerramento e Sorteios",
      "time": "17:20",
      "type": "other",
      "track": "main",
      "date": "2025-06-07"
    }
  ]
};

export default talks; 