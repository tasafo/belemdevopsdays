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
      "image": "/organizers/paulo-igor.jpg",
      "twitter": "pigodinho",
      "linkedin": "https://www.linkedin.com/in/pigodinho/"
    },
    {
      "name": "Fábio Figueiredo",
      "employer": "SysMap",
      "image": "/organizers/fabio-figueiredo.jpg",
      "twitter": "fabiolimaf",
      "linkedin": "https://www.linkedin.com/in/fabiolimaf/"
    },
    {
      "name": "Iago Cavalcante",
      "employer": "Woovi",
      "image": "/organizers/iago.jpg",
      "twitter": "iagoangelimc",
      "linkedin": "https://www.linkedin.com/in/iago-a-cavalcante/"
    },
    {
      "name": "Ricardo Casseb",
      "employer": "Idopter Labs",
      "image": "/organizers/ricardo-casseb.jpg",
      "linkedin": "https://www.linkedin.com/in/ricardocasseb/"
    },
    {
      "name": "Ryan Ricardo de Souza",
      "employer": "CR2 Transparência Pública",
      "image": "/organizers/ryan.jpg",
      "linkedin": "https://www.linkedin.com/in/theunrealryan/"
    },
    {
      "name": "Igor Dantas",
      "employer": "C6 Bank",
      "image": "/organizers/igor-dantas.jpg",
      "linkedin": "https://www.linkedin.com/in/igor-dantas/"
    },
    {
      "name": "Thalyson Wilker",
      "employer": "EasyGestor",
      "image": "/organizers/thalyson.jpeg",
      "linkedin": "https://www.linkedin.com/in/thalysonwilker/"
    },
    {
      "name": "João Baganha",
      "employer": "CESUPA",
      "image": "/organizers/joao-baganha.jpg",
      "linkedin": "https://www.linkedin.com/in/joaopedrobaganha"
    },
    {
      "name": "Tiago Danin",
      "employer": "Idopter Labs",
      "image": "/organizers/tiago-danin.jpeg",
      "linkedin": "https://www.linkedin.com/in/tiagodanin/"
    }
  ]
};

export default teamMembers; 