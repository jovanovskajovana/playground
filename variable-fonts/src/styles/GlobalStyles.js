import { createGlobalStyle } from 'styled-components'

import fontIBM from '../assets/IBMPlexSansVar-Roman.ttf';
import fontMovement from '../assets/Movement-DirectThin.woff';
import fontAncho from '../assets/AnchoGX.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'IBM Plex Sans Roman';
    src: url(${fontIBM});
  }

  @font-face {
    font-family: 'Movement';
    src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85648/MovementV.ttf");
  }

  @font-face {
    font-family: 'Ancho';
    src: url(${fontAncho});
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'IBM Plex Sans Roman', Times;
    /* font-family: 'Movement'; */
    /* font-family: 'Ancho'; */
  }
`

export default GlobalStyles
