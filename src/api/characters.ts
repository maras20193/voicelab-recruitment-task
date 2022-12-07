import { api } from "./apiConfig";

export const getCharacters = (page: number, species: string, name: string) =>
  api.get(`/character?page=${page}&name=${name}&species=${species}`);
