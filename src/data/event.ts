export interface FAQ {
  question: string;
  answer: string;
}

export interface Dates {
  start: string;
  end: string;
}

export interface Registration {
  start: string;
  end: string;
  link: string;
  open: boolean;
}

export interface CFP {
  start: string;
  end: string;
  announce: string;
  link: string;
  open: boolean;
}

export interface Social {
  twitter: string;
  email: string;
}

export interface Event {
  name: string;
  year: string;
  dates: Dates;
  description: string;
  registration: Registration;
  cfp: CFP;
  social: Social;
  faqs: FAQ[];
}

const event: Event = {
  "name": "DevOpsDays Belém",
  "year": "2025",
  "dates": {
    "start": "2025-06-07T09:00:00-03:00",
    "end": "2025-06-07T18:00:00-03:00"
  },
  "description": "DevOpsDays é uma série de conferências técnicas que abrangem tópicos de desenvolvimento de software, operações de infraestrutura de TI e a interseção entre eles. É executado como um evento por sua comunidade local.",
  "registration": {
    "start": "2025-02-21T00:00:00-03:00",
    "end": "2025-06-07T23:59:59-03:00",
    "link": "https://www.sympla.com.br/evento/devopsdays-belem-2025/2818140",
    "open": true
  },
  "cfp": {
    "start": "2025-03-01T00:00:00-03:00",
    "end": "2025-04-06T23:59:59-03:00",
    "announce": "2025-04-21T23:59:59-03:00",
    "link": "https://www.papercall.io/devopsdays-belem-2025",
    "open": true
  },
  "social": {
    "twitter": "tasafo",
    "email": "belem@devopsdays.org"
  },
  "faqs": [
    {
      "question": "O que é o DevOpsDays?",
      "answer": "DevOpsDays é uma série de conferências técnicas que abrangem tópicos de desenvolvimento de software, operações de infraestrutura de TI e a interseção entre eles."
    },
    {
      "question": "Quem pode participar?",
      "answer": "Qualquer pessoa interessada em DevOps, desde iniciantes até especialistas. Temos conteúdo para todos os níveis de conhecimento."
    },
    {
      "question": "Preciso ter conhecimento prévio?",
      "answer": "Não é necessário conhecimento prévio para participar. Teremos palestras e discussões para diferentes níveis de experiência."
    },
    {
      "question": "Como posso me tornar um patrocinador?",
      "answer": "Temos diversos níveis de patrocínio disponíveis. Entre em contato conosco pelo email belem@devopsdays.org para mais informações."
    },
    {
      "question": "Posso submeter uma palestra?",
      "answer": "Sim! Nosso Call for Papers estará aberto de 01/03/2025 até 14/04/2025. Você pode submeter sua proposta através do nosso site."
    },
    {
      "question": "Haverá certificado de participação?",
      "answer": "Sim, todos os participantes receberão certificado de participação no evento."
    }
  ]
};

export default event; 