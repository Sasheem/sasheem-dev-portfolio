import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, Roboto, sans-serif, serif;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    color: #44566C;     // dark blue grey
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