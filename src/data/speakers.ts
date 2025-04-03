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
  "speakers": []
};

export default speakers; 