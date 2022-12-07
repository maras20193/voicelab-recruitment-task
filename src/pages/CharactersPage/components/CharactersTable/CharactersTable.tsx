import { useEffect, useState } from "react";
import { getCharacters } from "../../../../api";
import { Dropdown, Pagination, SearchBar, Table } from "./components";

export const CharactersTable = () => {
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
      setCharacters(response.data.results);
      setPages(response.data.info.pages);
    } catch (error) {
      setCharacters([]);
      setPages(0);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage, filterSpecies, filterName);
  }, [currentPage, filterName, filterSpecies]);
  return (
    <div>
      <SearchBar setFilterName={setFilterName} />
      <Dropdown setFilterSpecies={setFilterSpecies} />
      {characters && (
        <Table data={characters} currentPage={currentPage} pages={pages} />
      )}
      <Pagination setCurrentPage={setCurrentPage} totalPages={pages} />
    </div>
  );
};
