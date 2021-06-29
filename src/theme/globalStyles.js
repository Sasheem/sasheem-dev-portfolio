import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, Roboto, sans-serif, serif;
  }
  p {
    font-size: 1.1em;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
  }
`;