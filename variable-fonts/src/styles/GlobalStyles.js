import { createGlobalStyle } from 'styled-components'

import fontInter from '../assets/Inter-VariableFont.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${fontInter});
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter';
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

`

export default GlobalStyles
