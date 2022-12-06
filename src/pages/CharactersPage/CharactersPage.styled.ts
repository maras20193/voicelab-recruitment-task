import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text100};
  padding: 55px 102px;
`;

export const Header = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 125%;
  margin-bottom: 24px;
`;
