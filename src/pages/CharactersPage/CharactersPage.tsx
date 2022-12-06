import { useEffect, useState } from "react";
import { getCharacters } from "../../api";
import { Table } from "./components/Table/Table";
import * as S from "./CharactersPage.styled";

export const CharactersPage = () => {
  /* eslint-disable no-console, @typescript-eslint/no-explicit-any  */
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  console.log(characters);

  const fetchCharacters = async () => {
    try {
      const response = await getCharacters();
      setCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <S.Wrapper>
      <S.Header>Characters</S.Header>
      {characters && <Table data={characters} />}
    </S.Wrapper>
  );
};
