import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  #root {
    height: 100vh;
    width: 100vw;
  }

  *, :after, :before { box-sizing: border-box; }
`;
