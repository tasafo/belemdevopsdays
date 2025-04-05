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
        }
      ]
    },
    {
      "id": "platinum",
      "label": "Platina",
      "amount": "R$ 3.000,00",
      "sponsors": []
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
      "sponsors": []
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
        }
      ]
    }
  ]
};

export default sponsors; 