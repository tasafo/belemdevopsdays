export interface SocialMedia {
  twitter?: string;
  linkedin?: string;
  github?: string;
}

export interface Speaker {
  id: string;
  name: string;
  bio: string;
  company: string;
  photo: string;
  social: SocialMedia;
}

export interface Speakers {
  speakers: Speaker[];
}

const speakers: Speakers = {
  "speakers": [
    {
      "id": "andre-gusmao",
      "name": "André Gusmão",
      "bio": "Especialista em DevOps com mais de 10 anos de experiência na implementação de práticas ágeis e automação de processos.",
      "company": "Tech Solutions",
      "photo": "/placeholder.svg",
      "social": {
        "twitter": "andregusmao",
        "linkedin": "https://linkedin.com/in/andregusmao",
        "github": "https://github.com/andregusmao"
      }
    },
    {
      "id": "joao-ferreira",
      "name": "João Ferreira",
      "bio": "Engenheiro de Software especializado em sistemas distribuídos e infraestrutura global.",
      "company": "Global Deploy",
      "photo": "/placeholder.svg",
      "social": {
        "twitter": "joaoferreira",
        "linkedin": "https://linkedin.com/in/joaoferreira",
        "github": "https://github.com/joaoferreira"
      }
    },
    {
      "id": "tiago-danin",
      "name": "Tiago Danin",
      "bio": "Desenvolvedor Mobile com foco em CI/CD para aplicativos iOS e Android.",
      "company": "Mobile Apps Inc",
      "photo": "/placeholder.svg",
      "social": {
        "twitter": "tiagodanin",
        "linkedin": "https://linkedin.com/in/tiagodanin",
        "github": "https://github.com/tiagodanin"
      }
    },
    {
      "id": "daniel-silva",
      "name": "Daniel Silva",
      "bio": "Arquiteto de soluções cloud com foco em escalabilidade e performance de aplicações.",
      "company": "Cloud Scale",
      "photo": "/placeholder.svg",
      "social": {
        "twitter": "danielsilva",
        "linkedin": "https://linkedin.com/in/danielsilva",
        "github": "https://github.com/danielsilva"
      }
    },
    {
      "id": "augusto-ribeiro",
      "name": "Augusto Ribeiro",
      "bio": "Especialista em Kubernetes e desenvolvimento seguro com Django.",
      "company": "Security First",
      "photo": "/placeholder.svg",
      "social": {
        "twitter": "augustoribeiro",
        "linkedin": "https://linkedin.com/in/augustoribeiro",
        "github": "https://github.com/augustoribeiro"
      }
    },
    {
      "id": "carlos-macapuna",
      "name": "Carlos Macapuna",
      "bio": "Engenheiro de software no Governo Federal, especialista em sistemas de autenticação distribuídos.",
      "company": "Gov Tech",
      "photo": "/placeholder.svg",
      "social": {
        "twitter": "carlosmacapuna",
        "linkedin": "https://linkedin.com/in/carlosmacapuna",
        "github": "https://github.com/carlosmacapuna"
      }
    },
    {
      "id": "carlos-oeiras",
      "name": "Carlos Oeiras",
      "bio": "Cientista de dados e especialista em MLOps, com experiência na implementação de pipelines para modelos de machine learning.",
      "company": "Data Ops",
      "photo": "/placeholder.svg",
      "social": {
        "twitter": "carlosoeiras",
        "linkedin": "https://linkedin.com/in/carlosoeiras",
        "github": "https://github.com/carlosoeiras"
      }
    },
    {
      "id": "luiz-sanches",
      "name": "Luiz Sanches",
      "bio": "Especialista em plataformas de participação cidadã e implementação de DevOps em projetos governamentais.",
      "company": "Gov Digital",
      "photo": "/placeholder.svg",
      "social": {
        "twitter": "luizsanches",
        "linkedin": "https://linkedin.com/in/luizsanches",
        "github": "https://github.com/luizsanches"
      }
    },
    {
      "id": "marcelo-palladino",
      "name": "Marcelo Palladino",
      "bio": "Consultor e coach em transformação digital e cultura DevOps, com mais de 15 anos de experiência em grandes organizações.",
      "company": "DevOps Culture",
      "photo": "/placeholder.svg",
      "social": {
        "twitter": "marcelopalladino",
        "linkedin": "https://linkedin.com/in/marcelopalladino",
        "github": "https://github.com/marcelopalladino"
      }
    }
  ]
};

export default speakers; 