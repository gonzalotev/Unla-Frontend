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

  header, footer {
    display: flex;
    align-items: center;
    background: white;
  }

  *, :after, :before { box-sizing: border-box; }
`;
