import styled from "styled-components";

export const Wrapper = styled.div`
  width: 240px;
`;

export const colorStyles = {
  container: (styles: any) => ({
    ...styles,
    outline: "none !important",
  }),
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "white",
    borderColor: "#BAC6D8",
    minHeight: "40px",
    outline: "none !important",
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    display: "none",
  }),
  indicatorContainer: (styles: any) => ({
    ...styles,
    width: "8px",
  }),
  placeholder: (styles: any) => ({
    ...styles,
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "18.2px",
    color: "#484F53",
  }),
};
