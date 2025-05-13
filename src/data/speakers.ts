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
  },
  {
    id: "allyson-brito",
    name: "Allyson Brito",
    bio: "Com mais de 20 anos liderando iniciativas estratégicas de inovação tecnológica e experiência em empresas globais de referência como IBM e Sun Microsystems (agora Oracle), sou CEO e fundador da Techlead IT Solutions, empresa especializada em transformação digital segura e desenvolvimento de soluções de alto impacto para grandes empresas, indústrias e setor público.\n\nAtualmente cursando doutorado em Engenharia de Software e Inteligência Artificial, reforçando meu compromisso com a excelência técnica e inovação contínua. Também atuo como Consultor Sênior na SOFTEX e membro da Equipe Técnica do Modelo MPS.BR — um modelo de melhoria de processos para software similar em estrutura e propósito ao Capability Maturity Model (CMM) — contribuindo ativamente para o avanço da maturidade e qualidade da engenharia de software no Brasil.\n\nMinha missão é apoiar organizações na conquista de resultados estratégicos, integrando tecnologia de ponta, governança efetiva e metodologias ágeis alinhadas aos objetivos de negócio. Em estreita colaboração com equipes executivas e stakeholders-chave, garanto que cada iniciativa vá além da excelência técnica, entregando melhorias tangíveis em desempenho, competitividade e valor sustentável. Com forte foco em tendências emergentes — como computação em nuvem, big data, inteligência artificial e segurança da informação — e sua aplicação efetiva à estratégia corporativa, busco antecipar soluções que gerem impacto real, mensurável e duradouro para as organizações e a sociedade.",
    company: "TechLead",
    photo: "/speakers/allyson-brito.jpg",
    social: {
      twitter: "BritoAllyson",
      linkedin: "https://www.linkedin.com/in/britoallyson/"
    }
  }
]

export default speakers; 