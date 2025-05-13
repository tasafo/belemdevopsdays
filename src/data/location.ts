export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Location {
  venue: string;
  address: string;
  city: string;
  state: string;
  country: string;
  coordinates: Coordinates;
  description: string;
}

const location: Location = {
  "venue": "Shopping Pátio Belém - Espaço G5 (4º Andar)",
  "address": "Tv. Padre Eutíquio, 1078 - Batista Campos",
  "city": "Belém",
  "state": "PA",
  "country": "Brasil",
  "coordinates": {
    "lat": -1.4585598,
    "lng": -48.495114,
  },
  "description": "O evento será realizado no Shopping Pátio Belém, localizado no coração da cidade, com fácil acesso por transporte público e amplo estacionamento."
};

export default location; 