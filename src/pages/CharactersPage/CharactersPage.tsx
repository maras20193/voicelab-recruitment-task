import { useEffect, useState } from "react";
import { getCharacters } from "../../api";
import { Table } from "./components/Table/Table";
import * as S from "./CharactersPage.styled";
import { Dropdown, Pagination, SearchBar } from "../../components";

export const CharactersPage = () => {
  /* eslint-disable no-console, @typescript-eslint/no-explicit-any  */
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const [filterSpecies, setFilterSpecies] = useState<string>(
    "Alien&species=Human"
  );
  const [filterName, setFilterName] = useState<string>("");

  const fetchCharacters = async (
    page: number,
    species: string,
    name: string
  ) => {
    try {
      const response = await getCharacters(page, species, name);
      console.log("res", response);
      setCharacters(response.data.results);
      setPages(response.data.info.pages);
    } catch (error) {
      console.log(error);
      setCharacters([]);
      setPages(0);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage, filterSpecies, filterName);
  }, [currentPage, filterName, filterSpecies]);

  return (
    <S.Wrapper>
      <S.Header>Characters</S.Header>
      <SearchBar setFilterName={setFilterName} />
      <Dropdown setFilterSpecies={setFilterSpecies} />
      {characters && (
        <Table data={characters} currentPage={currentPage} pages={pages} />
      )}
      <Pagination setCurrentPage={setCurrentPage} totalPages={pages} />
    </S.Wrapper>
  );
};
