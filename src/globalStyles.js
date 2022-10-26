import { createGlobalStyle } from "styled-components";
import theme from "./static/styles";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  body{ 
    background: #191920;
    -webkit-font-smoothing: antialiased;
  }
`;