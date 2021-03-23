import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, Roboto, sans-serif, serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
`;