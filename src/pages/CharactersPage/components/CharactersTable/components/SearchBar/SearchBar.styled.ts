import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 140px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary40};
  border-radius: 5px;
  padding-left: 12px;
  padding-right: 12px;

  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors.text50};
  }
`;
