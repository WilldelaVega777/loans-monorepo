import { createGlobalStyle } from 'styled-components'
import { backgroundColor, linkColor } from 'config/themes'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${backgroundColor};
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    line-height: 13px;
    margin: 0;
    padding: 0;
    text-decoration-thickness: auto;
    text-size-adjust: 100%;

    a {
      color: ${linkColor};
      font-weight: 600;
      text-decoration: none;

      :hover {
        cursor: pointer;
      }

      :visited {
        color: ${linkColor};
      }
    }
  }
`
