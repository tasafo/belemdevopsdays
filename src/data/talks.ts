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
      "name": "Main Track"
    }
  ],
  "talks": [
    {
      "id": "1",
      "title": "Credenciamento / Café da Manhã",
      "time": "09:00 - 09:30",
      "type": "break",
      "track": "main",
      "date": "2025-06-07"
    },
    {
      "id": "2",
      "title": "Abertura",
      "time": "09:30 - 09:45",
      "type": "other",
      "track": "main",
      "date": "2025-06-07"
    },
    {
      "id": "3",
      "title": "DevOps cenário atual e tendências",
      "speaker_id": "andre-gusmao",
      "time": "09:45 - 10:30",
      "type": "talk",
      "track": "main",
      "description": "Uma visão geral sobre o cenário atual de DevOps e as tendências para os próximos anos.",
      "date": "2025-06-07"
    },
    {
      "id": "4",
      "title": "Desafios em fazer deploy no mundo todo para todo mundo",
      "speaker_id": "joao-ferreira",
      "time": "10:35 - 11:00",
      "type": "talk",
      "track": "main",
      "description": "Como lidar com os desafios de fazer deploy de aplicações globalmente, considerando diferenças culturais, legislativas e técnicas.",
      "date": "2025-06-07"
    },
    {
      "id": "5",
      "title": "DevOps para Desenvolvimento Mobile",
      "speaker_id": "tiago-danin",
      "time": "11:05 - 11:30",
      "type": "talk",
      "track": "main",
      "description": "Aplicando práticas DevOps no desenvolvimento de aplicativos móveis para acelerar a entrega e melhorar a qualidade.",
      "date": "2025-06-07"
    },
    {
      "id": "6",
      "title": "Escalabilidade de uma aplicação: Principais desafios, como escalar e importância",
      "speaker_id": "daniel-silva",
      "time": "11:35 - 12:00",
      "type": "talk",
      "track": "main",
      "description": "Discutindo os principais desafios, estratégias e a importância da escalabilidade em aplicações modernas.",
      "date": "2025-06-07"
    },
    {
      "id": "7",
      "title": "Intervalo para almoço",
      "time": "12:00 - 13:00",
      "type": "break",
      "track": "main",
      "date": "2025-06-07"
    },
    {
      "id": "8",
      "title": "Helm e Django: Escrevendo configurações com Segurança",
      "speaker_id": "augusto-ribeiro",
      "time": "13:00 - 13:25",
      "type": "talk",
      "track": "main",
      "description": "Como utilizar Helm Charts para configurar aplicações Django de forma segura no Kubernetes.",
      "date": "2025-06-07"
    },
    {
      "id": "9",
      "title": "Acesso gov.br: O que sustenta o login único do Governo Federal",
      "speaker_id": "carlos-macapuna",
      "time": "13:30 - 13:55",
      "type": "talk",
      "track": "main",
      "description": "Uma visão por trás das cortinas da infraestrutura que suporta o sistema de login único do Governo Federal brasileiro.",
      "date": "2025-06-07"
    },
    {
      "id": "10",
      "title": "MLOps - Compreendendo o processo nos dias atuais",
      "speaker_id": "carlos-oeiras",
      "time": "14:00 - 14:25",
      "type": "talk",
      "track": "main",
      "description": "Entendendo como MLOps está transformando a forma como as organizações implementam e mantêm modelos de machine learning.",
      "date": "2025-06-07"
    },
    {
      "id": "11",
      "title": "Pra não dizer que não falei de devops – O caso Brasil Participativo",
      "speaker_id": "luiz-sanches",
      "time": "14:30 - 14:55",
      "type": "talk",
      "track": "main",
      "description": "Estudo de caso sobre a aplicação de práticas DevOps na plataforma Brasil Participativo.",
      "date": "2025-06-07"
    },
    {
      "id": "12",
      "title": "Coffee-break",
      "time": "15:00 - 15:40",
      "type": "break",
      "track": "main",
      "date": "2025-06-07"
    },
    {
      "id": "13",
      "title": "FishBowl",
      "time": "15:40 - 16:30",
      "type": "other",
      "track": "main",
      "description": "Discussão aberta com participação da plateia sobre temas relevantes de DevOps.",
      "date": "2025-06-07"
    },
    {
      "id": "14",
      "title": "Nada corrompe mais a cultura DevOps do que o heroísmo",
      "speaker_id": "marcelo-palladino",
      "time": "16:30 - 17:15",
      "type": "talk",
      "track": "main",
      "description": "Como a cultura do heroísmo pode ser prejudicial para a implementação e sustentação de práticas DevOps em organizações.",
      "date": "2025-06-07"
    },
    {
      "id": "15",
      "title": "Encerramento e Sorteios",
      "time": "17:20 - 18:00",
      "type": "other",
      "track": "main",
      "date": "2025-06-07"
    }
  ]
};

export default talks; 