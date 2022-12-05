import React, { useEffect, useState } from "react";
import { getCharacters } from "../../api";

export const CharactersPage = () => {
  /* eslint-disable no-console, @typescript-eslint/no-explicit-any  */
  const [characters, setCharacters] = useState<any[]>([]);

  const fetchCharacters = async () => {
    try {
      const response = await getCharacters();
      setCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(characters);

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <p>characters</p>
    </div>
  );
};
