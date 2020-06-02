import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    height: min-content;
  }
  body {
    height: min-content;
    overflow-y: ${props => props.hidden ? 'hidden': 'scroll'};
    overflow-x: hidden;
  }
  #root {
    height: min-content;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
`
