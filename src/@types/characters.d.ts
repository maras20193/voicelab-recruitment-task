interface ILocation {
  name: string;
  url: string;
}

interface IOrigin {
  name: string;
  url: string;
}

declare interface ICharacter {
  id: number;
  created: string;
  episode: string[];
  image: string;
  gender: string;
  location: ILocation;
  name: string;
  origin: IOrigin;
  species: string;
  status: string;
  type: string;
  url: string;
}
