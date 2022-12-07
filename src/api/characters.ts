import { api } from "./apiConfig";

export const getCharacters = (page: number) =>
  api.get(`/character?page=${page}`);
