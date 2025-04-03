export interface Talk {
  id: string;
  title: string;
  speaker_id?: string;
  time: string;
  type: string;
  track: string;
  description?: string;
  date: string;
}

export interface Speaker {
  id: string;
  name: string;
  bio: string;
  company: string;
  photo: string;
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}

export interface TalksData {
  tracks: {
    id: string;
    name: string;
  }[];
  talks: Talk[];
} 