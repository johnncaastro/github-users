import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, p, span, label, input {
    color: ${props => props.theme.colors.text};
  }

  body, input, button, textarea {
    font: 400 16px 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 92.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 86%;
    }
  }
`