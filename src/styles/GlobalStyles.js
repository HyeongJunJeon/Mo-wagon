import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    /* background-color: #000000;
    color: #FFFFFF; */
  }

  button {
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
