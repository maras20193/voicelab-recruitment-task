import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 2px 18px 0px #dde3ec;

  border-collapse: separate;
  /* border-spacing: 5px; */

  color: ${({ theme }) => theme.colors.text100};

  /* padding-left: 16px;
  padding-right: 16px; */
`;

export const THead = styled.thead`
  height: 42px;
  color: ${({ theme }) => theme.colors.text80};
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.primary30}; */
`;

export const THeadRow = styled.tr`
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.primary30}; */
`;

export const THeader = styled.th`
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
  letter-spacing: 0em;
  text-align: left;

  padding-left: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary30};

  &:nth-child(1) {
    width: 231px;
    padding-left: 24px;
  }

  &:nth-last-child(1) {
    padding-right: 16px;
  }
`;

export const TBody = styled.tbody``;

export const TRow = styled.tr<{ isStatusUnknown: boolean }>`
  height: 83px;
  background-color: ${({ theme, isStatusUnknown }) =>
    isStatusUnknown ? theme.colors.primary5 : theme.colors.white};
  color: ${({ theme, isStatusUnknown }) =>
    isStatusUnknown ? theme.colors.text70 : theme.colors.text100};
`;

export const TCell = styled.td<{
  isCellUnknown: boolean;
  isStatusUnknown: boolean;
}>`
  padding-left: 50px;
  vertical-align: middle;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary15};

  width: 162px;

  font-weight: 400;
  font-size: 15px;
  line-height: 130%;

  /// Figma design don't show case when status is unknown and cell value is unknown
  color: ${({ theme, isCellUnknown }) =>
    isCellUnknown ? theme.colors.text70 : theme.colors.text100};
  color: ${({ theme, isCellUnknown, isStatusUnknown }) =>
    isCellUnknown && isStatusUnknown ? theme.colors.text25 : null};

  &:nth-child(1) {
    width: 231px;
    padding-left: 24px;
  }

  &:nth-last-child(1) {
    padding-right: 36px;
  }
`;

export const ImageWrapper = styled.div<{ imgUrl: string }>`
  width: 50px;
  height: 50px;
  border: 2px dashed ${({ theme }) => theme.colors.primary15};
  border-radius: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  p:nth-child(1) {
    font-weight: 500;
  }
`;

export const StatusWrapper = styled.div<{ isStatusUnknown: boolean }>`
  display: flex;
  gap: 8px;

  color: ${({ theme, isStatusUnknown }) =>
    isStatusUnknown ? theme.colors.text70 : theme.colors.text100};
`;
