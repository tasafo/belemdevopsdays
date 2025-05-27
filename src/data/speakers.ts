export interface SocialMedia {
  twitter?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
}

export interface Speaker {
  id: string;
  name: string;
  bio: string;
  company: string;
  photo: string;
  social: SocialMedia;
  isKeynote?: boolean;
  role?: string;
}

const speakers: Speaker[] = [
  {
    id: "leticia-dornelas",
    name: "Letícia Dornelas",
    bio: "Letícia tem mais de 10 anos de atuação na área de tecnologia. Atualmente, desempenha o cargo de Arquiteta de Soluções na AWS, onde apoia clientes do mercado financeiro. Formada pelo IFSP, tem interesse especial por temas como IA Generativa, DevOps, Arquitetura Orientada a Eventos e Serverless.",
    company: "Amazon Web Services",
    photo: "/belemdevopsdays/speakers/leticia-dornelas.jpg",
    role: "Solutions Architect",
    social: {
      linkedin: "https://www.linkedin.com/in/leticia-dornelas/",
      instagram: "https://www.instagram.com/levilinux/"
    },
    isKeynote: true,
  },
  {
    id: "marcelio-leal",
    name: "Marcelio Leal",
    bio: "Com uma trajetória inspiradora, Marcelio é mestre pela UFPA e já passou por gigantes como Amazon e Nubank. Além disso, é cofundador das startups Bhub, Onsee e TS9, e advisor na E-station e Caic. Apaixonado por Software Livre, comunidades e educação, Marcelio é um membro ativo do ecossistema de inovação e startups.",
    company: "Google",
    photo: "/belemdevopsdays/speakers/marcelio-leal.jpg",
    role: "Engineering Manager",
    social: {
      linkedin: "https://www.linkedin.com/in/marcelio-leal/"
    },
    isKeynote: true
  },
  {
    id: "levi-leopoldino",
    name: "Levi Leopoldino",
    bio: "Sou Levi Leopoldino, conhecido como Levinux, engenheiro DevOps com mais de 25 anos de experiência em tecnologia e fundador da DOUG BR - DevOps User Group Brazil\n\nTenho dedicado minha vida a transformar a forma como as pessoas entram e crescem no mundo DevOps, especialmente quem está começando, vem de outras áreas ou não tem uma base técnica consolidada. Acredito que ninguém deve ficar de fora do futuro da tecnologia.\n\nJá venho promovendo trilhas práticas para iniciantes, enquetes educativas, eventos em parceria com outras comunidades e lives sobre as tendências de DevOps para 2025.",
    company: "Matera",
    photo: "/belemdevopsdays/speakers/levi-leopoldino.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/levinux/"
    }
  },
  {
    id: "allyson-brito",
    name: "Allyson Brito",
    bio: "Com mais de 20 anos liderando iniciativas estratégicas de inovação tecnológica e experiência em empresas globais de referência como IBM e Sun Microsystems (agora Oracle), sou CEO e fundador da Techlead IT Solutions, empresa especializada em transformação digital segura e desenvolvimento de soluções de alto impacto para grandes empresas, indústrias e setor público.\n\nAtualmente cursando doutorado em Engenharia de Software e Inteligência Artificial, reforçando meu compromisso com a excelência técnica e inovação contínua. Também atuo como Consultor Sênior na SOFTEX e membro da Equipe Técnica do Modelo MPS.BR — um modelo de melhoria de processos para software similar em estrutura e propósito ao Capability Maturity Model (CMM) — contribuindo ativamente para o avanço da maturidade e qualidade da engenharia de software no Brasil.\n\nMinha missão é apoiar organizações na conquista de resultados estratégicos, integrando tecnologia de ponta, governança efetiva e metodologias ágeis alinhadas aos objetivos de negócio. Em estreita colaboração com equipes executivas e stakeholders-chave, garanto que cada iniciativa vá além da excelência técnica, entregando melhorias tangíveis em desempenho, competitividade e valor sustentável. Com forte foco em tendências emergentes — como computação em nuvem, big data, inteligência artificial e segurança da informação — e sua aplicação efetiva à estratégia corporativa, busco antecipar soluções que gerem impacto real, mensurável e duradouro para as organizações e a sociedade.",
    company: "TechLead",
    photo: "/belemdevopsdays/speakers/allyson-brito.jpg",
    social: {
      twitter: "BritoAllyson",
      linkedin: "https://www.linkedin.com/in/britoallyson/"
    }
  },
  {
    id: "tiagoda-danin",
    name: "Tiago Danin",
    bio: "Sou Desenvolvedor Mobile com mais de 5 anos de experiência, atualmente componho o time da Idopterlabs, também sou pesquisando de segurança por conta própria e curto tudo que envolve tecnologia, inovação e automação. Trabalho com Flutter, Kotlin, Swift, Obj-C, React Native e Javascript, mas também já mexi com frontend, backend e até app pra desktop já fiz. Ultimamente, tô mergulhando em Marketing Digital e Gerência de Produtos para expandir os horizontes além do código. Nas horas vagas, correr pelas ruas, jogar no computador e uma boa música. Tô sempre buscando aprender mais, me desafiar e curtir o caminho.",
    company: "Idopterlabs",
    photo: "/belemdevopsdays/speakers/tiago-danin.jpeg",
    social: {
      linkedin: "https://www.linkedin.com/in/tiagodanin/",
      instagram: "https://www.instagram.com/tiagodanin/"
    }
  },
  {
    "id": "lucas-ribeiro",
    "name": "Lucas Ribeiro",
    "bio": "Engenheiro mecânico formado pela Escola Politécnica da UFRJ, com mestrado em engenharia elétrica pela Escola Politécnica da USP e pela University of Twente. Desde 2019, atua de forma interdisciplinar no desenvolvimento de projetos de P&D no Centro Interdisciplinar em Tecnologias Interativas da Universidade de São Paulo (CITI-USP), com foco em soluções de Internet das Coisas (IoT) e visão computacional. É professor nos cursos de Sistemas de Informação, Engenharia da Computação e Mecatrônica na FIAP, e também Instrutor Sênior na Escola de Programação e DevOps da Alura, com ênfase em formações e conteúdos de DevOps. De 2022 a 2024, foi instrutor e pesquisador na área de IoT no Samsung OCEAN, em São Paulo.",
    "company": "Alura",
    "photo": "/belemdevopsdays/speakers/lucas-ribeiro.jpg",
    "social": {
      "linkedin": "https://www.linkedin.com/in/lucasribeiromata/"
    }
  },
  {
    id: "marcelo-sa",
    name: "Marcelo Sá",
    bio: "Com uma trajetória que se estende desde 1996 na indústria de TI, sou o CEO da Jambu Tecnologia, Analista de Negócios e Professor de Engenharia de Software. Minha carreira é pautada pela gestão de projetos adotando práticas agilistas e a adoção de tecnologias livres e abertas, destacando-se na engenharia de sistemas no contexto das infraestruturas publicas digitais e Inteligencia Artificial em redes transacionais.\n\nNa vanguarda da inovação tecnológica, minha missão é liderar equipes para entregar soluções que impulsionem o crescimento, sustentabilidade e a qualidade no setor do varejo, educação, saúde e fintech. Com competências consolidadas em Engenharia do Caos, Redes Abertas Transacionais, IA, Blockchain/Web3 e Sistemas de Software, contribuo significativamente para projetos que moldam o futuro da tecnologia da informação e comunicação.",
    company: "Jambu Tecnologia",
    photo: "/belemdevopsdays/speakers/marcelo-sa.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/marcelosa/",
      instagram: "https://www.instagram.com/marcelordesa/"
    }
  },
  {
    id: "diego-brito",
    name: "Diego Brito",
    bio: "Hoje, lidero a equipe de Arquitetura em TI no Banpará, olhando a TI sob o ponto de vista de governança, definindo padrões, controles e métricas. Acredito que apenas mudanças institucinalizadas, alinhadas a estratégia e impulsionadas por excelências individuais, podem gerar um sucesso efetivo, otimizado e sustentável. Há 11 anos, venho fazendo de tudo um pouco. Começando com webdesign, já atuei como desenvolvedor frontend, backend, BI e o que mais apareceu. Também já usei de tudo, mas majoritariamente Java, C#, Angular e CSS.",
    company: "Banpará",
    photo: "/belemdevopsdays/speakers/diego-brito.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/diegonobri/"
    }
  },
  {
    id: "lucas-alberto",
    name: "Lucas Alberto",
    bio: "Engenheiro de Plataforma/DevOps focado em soluções nativas para Kubernetes. Atualmente construindo uma plataforma de Kubernetes-as-a-service na Syself.com. Entusiasta de open-source e sistemas distribuídos.",
    company: "Syself",
    photo: "/belemdevopsdays/speakers/lucas-alberto.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/lucasrattz/"
    }
  }
]

export default speakers; 