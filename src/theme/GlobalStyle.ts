import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.surface};
    line-height: 1.5;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }
`;
