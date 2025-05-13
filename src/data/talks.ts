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
      "id": "devops-career-2025",
      "title": "Desvendando a Carreira em DevOps: Tendências, Habilidades e Oportunidades 2025",
      "time": "10:35",
      "type": "talk",
      "track": "main",
      "date": "2025-05-25",
      "speaker_id": "levi-leopoldino",
      "description": "Nesta palestra, Levi Leopoldino (Levinux), fundador da DOUG BR, compartilha caminhos práticos para iniciar e crescer na carreira DevOps em 2025, com foco em inclusão, tendências do mercado, habilidades essenciais e oportunidades acessíveis como comunidades e certificações gratuitas — tudo com base em mais de 25 anos de experiência na área."
    }
  ]
};

export default talks; 