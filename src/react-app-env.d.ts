/// <reference types="react-scripts" />

interface Character {
  id: 2,
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender: string;
  origin: Basic;
  location?: Basic;
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}

interface Episode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

interface Basic {
  name: string;
  url: string;
}

interface Info {
  count: number;
  next: string;
  pages: number;
  prev: string | null;
}

interface CharactersFromApi {
  info: Info;
  results: Character[];
}

interface EpisodesFromApi {
  info: Info;
  results: Episode[];
}

interface LocationsFromApi {
  info: Info;
  results: Location[];
}
