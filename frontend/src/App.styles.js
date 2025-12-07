import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: #ececec; /* soft gray */
    font-family: Arial, sans-serif;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;
