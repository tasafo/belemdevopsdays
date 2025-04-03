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
  "venue": "Shopping Pátio Belém",
  "address": "Travessa Padre Eutíquio, 1078 - Batista Campos",
  "city": "Belém",
  "state": "PA",
  "country": "Brasil",
  "coordinates": {
    "lat": -1.4516813,
    "lng": -48.4809826
  },
  "description": "O evento será realizado no Shopping Pátio Belém, localizado no coração da cidade, com fácil acesso por transporte público e amplo estacionamento."
};

export default location; 