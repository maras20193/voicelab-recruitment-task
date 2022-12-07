import styled from "styled-components";

export const Wrapper = styled.div`
  align-self: flex-end;
  margin-top: 43px;
  .container {
    display: flex;
    gap: 4px;
  }

  .page-item {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.primary40};
    box-shadow: ${({ theme }) => theme.shadows.pagination};
    border-radius: 5px;
    transition: 0.3s;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.colors.primary40};
    }
  }

  .page-link {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text80};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page-item-break {
    width: 40px;
    height: 40px;
    transition: 0.3s;
    cursor: pointer;
  }

  .page-link-break {
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.text80};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .selected {
    background-color: ${({ theme }) => theme.colors.primary10};
  }

  .disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    :hover {
      background-color: ${({ theme }) => theme.colors.disabled};
    }
    cursor: default;
  }
`;
