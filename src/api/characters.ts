import { api } from "./apiConfig";

export const getCharacters = () => api.get("/character");
