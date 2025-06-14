export interface Sponsor {
  id: string;
  name: string;
  url: string;
  logo: string;
}

export interface SponsorLevel {
  id: string;
  label: string;
  amount: string;
  sponsors: Sponsor[];
}

export interface Sponsors {
  sponsor_levels: SponsorLevel[];
}

const sponsors: Sponsors = {
  "sponsor_levels": [
    {
      "id": "diamante",
      "label": "Diamante",
      "amount": "R$ 5.000,00",
      "sponsors": [
        {
          "id": "idopterlabs",
          "name": "Idopter Labs",
          "url": "https://idopterlabs.com.br",
          "logo": "/belemdevopsdays/sponsors/idopterlabs.png"
        },
        {
          "id": "vibe",
          "name": "Vibe",
          "url": "https://www.vibetecnologia.com/",
          "logo": "/belemdevopsdays/sponsors/vibe.avif"
        },
        {
          "id": "techlead",
          "name": "Techlead",
          "url": "https://www.techlead.com.br/",
          "logo": "/belemdevopsdays/sponsors/techlead.webp"
        },
      ]
    },
    {
      "id": "platinum",
      "label": "Platina",
      "amount": "R$ 3.000,00",
      "sponsors": [
        {
          "id": "linuxtips",
          "name": "LINUXtips",
          "url": "https://linuxtips.io",
          "logo": "/belemdevopsdays/sponsors/linuxtips.png"
        },
      ]
    },
    {
      "id": "gold",
      "label": "Ouro",
      "amount": "R$ 2.000,00",
      "sponsors": [
        {
          "id": "easygestor",
          "name": "EasyGestor",
          "url": "https://easygestor.com/",
          "logo": "/belemdevopsdays/sponsors/easygestor.png"
        },
        {
          "id": "inteceleri",
          "name": "Inteceleri",
          "url": "https://www.inteceleri.com.br/",
          "logo": "/belemdevopsdays/sponsors/inteceleri.png"
        }
      ]
    },
    {
      "id": "silver",
      "label": "Prata",
      "amount": "R$ 1.000,00",
      "sponsors": [
        {
          "id": "cloudx",
          "name": "Cloudx",
          "url": "https://cloudx.com.br",
          "logo": "/belemdevopsdays/sponsors/cloudx-bel-2025.png"
        }
      ]
    },
    {
      "id": "bronze",
      "label": "Bronze",
      "amount": "R$ 700,00",
      "sponsors": []
    },
    {
      "id": "safo",
      "label": "Safo",
      "amount": "R$ 300,00",
      "sponsors": [
        {
          "id": "hageconsulting",
          "name": "Hage Consulting",
          "url": "https://hageconsulting.com.br/",
          "logo": "/belemdevopsdays/sponsors/hage-consulting.webp"
        }
      ]
    },
    {
      "id": "community",
      "label": "Comunidade",
      "amount": "-",
      "sponsors": [
        {
          "id": "tasafo",
          "name": "Tá Safo",
          "url": "https://tasafo.org",
          "logo": "/belemdevopsdays/sponsors/tasafo.png"
        },
        {
          "id": "devsnorte",
          "name": "Devs Norte",
          "url": "https://www.instagram.com/devsnorte/",
          "logo": "/belemdevopsdays/sponsors/devsnorte.png"
        },
        {
          "id": "elasnatec",
          "name": "Elas na Tecnologia",
          "url": "https://www.instagram.com/elas.na.tecnologia/",
          "logo": "/belemdevopsdays/sponsors/elas-na-tec-bel-2025.png"
        },
        {
          "id": "paralivre",
          "name": "ParaLivre.org",
          "url": "https://www.paralivre.org/",
          "logo": "/belemdevopsdays/sponsors/paralivre.png"
        },
        {
          "id": "paratic",
          "name": "ParáTIC",
          "url": "https://www.paratic.com.br/",
          "logo": "/belemdevopsdays/sponsors/paratic.png"
        },
        {
          "id": "acaivalley",
          "name": "Acaí Valley",
          "url": "https://www.acaivalley.com.br/",
          "logo": "/belemdevopsdays/sponsors/acai-valley.png"
        },
        {
          "id": "awsbelem",
          "name": "AWS User Group Belém",
          "url": "https://www.instagram.com/awsbelem/",
          "logo": "/belemdevopsdays/sponsors/aws-belem.svg"
        },
        {
          "id": "beljogos",
          "name": "BelJogos",
          "url": "http://www.beljogos.com.br",
          "logo": "/belemdevopsdays/sponsors/beljogos.png"
        },
        {
          "id": "caesoft",
          "name": "CAESoft UEPA",
          "url": "https://www.instagram.com/caesoft.uepa",
          "logo": "/belemdevopsdays/sponsors/caesoft.png"
        },
        {
          "id": "sucesupa",
          "name": "SUCESU PA",
          "url": "https://sucesupa.org.br/",
          "logo": "/belemdevopsdays/sponsors/sucesu-pa.png"
        },
        {
          "id": "devops-user-group-brazil",
          "name": "DevOps User Group Brazil",
          "url": "https://www.linkedin.com/company/dougbrazil/",
          "logo": "/belemdevopsdays/sponsors/devops-user-group-brazil.webp"
        }
      ]
    },
    {
      "id": "support",
      "label": "Apoio",
      "amount": "-",
      "sponsors": [
        {
          "id": "kubecareers",
          "name": "Kube Careers",
          "url": "https://kube.careers/",
          "logo": "/belemdevopsdays/sponsors/kubecareers.png"
        },
        {
          "id": "kubevents",
          "name": "Kube Events",
          "url": "https://kube.events/",
          "logo": "/belemdevopsdays/sponsors/kubeevents.png"
        },
        {
          "id": "cesupa",
          "name": "CESUPA",
          "url": "https://www.cesupa.br/",
          "logo": "/belemdevopsdays/sponsors/cesupa.png"
        },
        {
          "id": "aws",
          "name": "Amazon Web Services",
          "url": "https://devopsdays.org/",
          "logo": "/belemdevopsdays/sponsors/amazon-web-services.png"
        }
      ]
    }
  ]
};

export default sponsors; 