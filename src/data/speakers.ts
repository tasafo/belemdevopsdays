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

const speakers: Speaker[] = [
  {
    id: "levi-leopoldino",
    name: "Levi Leopoldino",
    bio: "Sou Levi Leopoldino, conhecido como Levinux, engenheiro DevOps com mais de 25 anos de experiência em tecnologia e fundador da DOUG BR - DevOps User Group Brazil\n\nTenho dedicado minha vida a transformar a forma como as pessoas entram e crescem no mundo DevOps, especialmente quem está começando, vem de outras áreas ou não tem uma base técnica consolidada. Acredito que ninguém deve ficar de fora do futuro da tecnologia.\n\nJá venho promovendo trilhas práticas para iniciantes, enquetes educativas, eventos em parceria com outras comunidades e lives sobre as tendências de DevOps para 2025.",
    company: "Matera",
    photo: "/speakers/levi-leopoldino.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/levinux/"
    }
  }
]

export default speakers; 