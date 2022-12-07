import { api } from "./apiConfig";

export const getCharacters = (
  page: number,
  filterSpecies: string,
  name: string
) => api.get(`/character?page=${page}&name=${name}&species=${filterSpecies}`);
