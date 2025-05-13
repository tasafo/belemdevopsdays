export interface Track {
  id: string;
  name: string;
}

export interface Talk {
  id: string;
  title: string;
  time: string;
  type: 'talk' | 'break' | 'other';
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
      id:"",
      title: "Pausa para o Almoço",
      time: "12:00",
      type: "break",
      track: "main",
      date: "2025-06-07"
    },
  ]
};

export default talks; 