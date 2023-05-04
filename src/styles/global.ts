
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['bg_color']};
  }

  body, input-security, button, table{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
  }
`

