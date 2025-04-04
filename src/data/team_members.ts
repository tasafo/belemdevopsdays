export interface TeamMember {
  name: string;
  employer: string;
  image: string;
  twitter?: string;
  linkedin: string;
}

export interface TeamMembers {
  team_members: TeamMember[];
}

const teamMembers: TeamMembers = {
  "team_members": [
    {
      "name": "Paulo Igor",
      "employer": "Idopter Labs",
      "image": "/belemdevopsdays/organizers/paulo-igor.jpg",
      "twitter": "pigodinho",
      "linkedin": "https://www.linkedin.com/in/pigodinho/"
    },
    {
      "name": "Fábio Figueiredo",
      "employer": "SysMap",
      "image": "/belemdevopsdays/organizers/fabio-figueiredo.jpg",
      "twitter": "fabiolimaf",
      "linkedin": "https://www.linkedin.com/in/fabiolimaf/"
    },
    {
      "name": "Iago Cavalcante",
      "employer": "Woovi",
      "image": "/belemdevopsdays/organizers/iago.jpg",
      "twitter": "iagoangelimc",
      "linkedin": "https://www.linkedin.com/in/iago-a-cavalcante/"
    },
    {
      "name": "Ricardo Casseb",
      "employer": "Idopter Labs",
      "image": "/belemdevopsdays/organizers/ricardo-casseb.jpg",
      "linkedin": "https://www.linkedin.com/in/ricardocasseb/"
    },
    {
      "name": "Ryan Ricardo de Souza",
      "employer": "CR2 Transparência Pública",
      "image": "/belemdevopsdays/organizers/ryan.jpg",
      "linkedin": "https://www.linkedin.com/in/theunrealryan/"
    },
    {
      "name": "Igor Dantas",
      "employer": "C6 Bank",
      "image": "/belemdevopsdays/organizers/igor-dantas.jpg",
      "linkedin": "https://www.linkedin.com/in/igor-dantas/"
    },
    {
      "name": "Thalyson Wilker",
      "employer": "EasyGestor",
      "image": "/belemdevopsdays/organizers/thalyson.jpeg",
      "linkedin": "https://www.linkedin.com/in/thalysonwilker/"
    },
    {
      "name": "João Baganha",
      "employer": "CESUPA",
      "image": "/belemdevopsdays/organizers/joao-baganha.jpg",
      "linkedin": "https://www.linkedin.com/in/joaopedrobaganha"
    },
    {
      "name": "Tiago Danin",
      "employer": "Idopter Labs",
      "image": "/belemdevopsdays/organizers/tiago-danin.jpeg",
      "linkedin": "https://www.linkedin.com/in/tiagodanin/"
    }
  ]
};

export default teamMembers; 