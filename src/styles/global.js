import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      user-select: none;
      transition: background 250ms ease-in-out, stroke 50ms ease; 
  }

  body{
      background: ${(props) => props.theme.colors.primary};
      font-family: 'Jetbrains Mono', sans-serif;
      font-size: 15px;
      font-weight: 400;
      color: ${(props) => props.theme.colors.text};
  }

  html, body, .App{
    height: 100vh;
  }
`;

export default GlobalStyle;
