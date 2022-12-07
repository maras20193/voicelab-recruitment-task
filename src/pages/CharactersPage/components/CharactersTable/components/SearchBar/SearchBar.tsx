import { Dispatch, SetStateAction } from "react";
import { search } from "../../../../../../assets";
import * as S from "./SearchBar.styled";

type SearchBarProps = {
  setFilterName: Dispatch<SetStateAction<string>>;
};

export const SearchBar = ({ setFilterName }: SearchBarProps) => {
  const handleChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setFilterName((e.target as HTMLInputElement).value);
  };

  return (
    <S.Wrapper>
      <S.Input type="text" onChange={handleChangeValue} placeholder="Search" />
      <img src={search} alt="search" />
    </S.Wrapper>
  );
};
