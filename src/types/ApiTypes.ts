export interface ApiPeopleType {
  name: string;
  height: string;
  urlImage?: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homewold: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
}

export interface ApiDataType {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiPeopleType[];
}