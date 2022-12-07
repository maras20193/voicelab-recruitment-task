import { useEffect, useState } from "react";
import { getCharacters } from "../../api";
import { Table } from "./components/Table/Table";
import * as S from "./CharactersPage.styled";
import { Pagination } from "../../components";

export const CharactersPage = () => {
  /* eslint-disable no-console, @typescript-eslint/no-explicit-any  */
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);

  const fetchCharacters = async (page: number) => {
    try {
      const response = await getCharacters(page);
      console.log("res", response);
      setCharacters(response.data.results);
      setPages(response.data.info.pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage);
  }, [currentPage]);

  return (
    <S.Wrapper>
      <S.Header>Characters</S.Header>
      {characters && (
        <Table data={characters} currentPage={currentPage} pages={pages} />
      )}
      <Pagination setCurrentPage={setCurrentPage} totalPages={pages} />
    </S.Wrapper>
  );
};
