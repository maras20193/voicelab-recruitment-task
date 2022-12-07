import * as S from "./CharactersPage.styled";
import { CharactersTable } from "./components";

export const CharactersPage = () => (
  <S.Wrapper>
    <S.Header>Characters</S.Header>
    <CharactersTable />
  </S.Wrapper>
);
