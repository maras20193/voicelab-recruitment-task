import { useEffect, useState } from "react";
import { getCharacters } from "../../../../api";
import { Dropdown, Pagination, SearchBar, Table } from "./components";
import * as S from "./CharactersTable.styled";
import { useDebounce } from "../../../../hooks/useDebounce";

export const CharactersTable = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const [filterSpecies, setFilterSpecies] = useState<string>("");
  const [filterName, setFilterName] = useState<string>("");

  const debouncedFilterName = useDebounce(filterName, 500);

  const fetchCharacters = async (
    page: number,
    species: string,
    name: string
  ) => {
    try {
      const response = await getCharacters(page, species, name);
      setCharacters(response.data.results);
      setPages(response.data.info.pages);
    } catch (error) {
      setCharacters([]);
      setPages(0);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage, filterSpecies, filterName);
  }, [currentPage, debouncedFilterName, filterSpecies]);

  return (
    <S.Wrapper>
      <S.FiltersWrapper>
        <SearchBar setFilterName={setFilterName} />
        <Dropdown setFilterSpecies={setFilterSpecies} />
      </S.FiltersWrapper>
      {characters && (
        <Table data={characters} currentPage={currentPage} pages={pages} />
      )}
      <Pagination setCurrentPage={setCurrentPage} totalPages={pages} />
    </S.Wrapper>
  );
};
