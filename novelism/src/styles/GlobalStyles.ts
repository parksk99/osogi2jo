import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Pretendard Variable";
  font-weight: 45 920;
  font-style: normal;
  font-display: swap;
  src: local("Pretendard Variable"),
    url("../build/fonts/PretendardVariable.woff2") format("woff2-variations");
}
  html, body{
    margin: 0px;
    padding: 0px;
    font-family: "Pretendard Variable";
    overflow: hidden;
    background-color: #F5F7FB;
  }

  div{
    box-sizing: border-box;
  }

  /* :root {
    --color__primary: #E75151;
  } */
`;

export default GlobalStyles;
