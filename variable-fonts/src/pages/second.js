import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import Page from '../components/Page'
import { TextLayout } from '../styles/PageLayout'


/* Animation keyframes */
const inhale = keyframes`
  0% {
    font-variation-settings: 'wght' 700, 'wdth' 100;
    font-size: 11vw;
  }
  50% {
    font-variation-settings: 'wght' 100, 'wdth' 85;
    font-size: 10vw;
  }
  100% {
    font-variation-settings: 'wght' 700, 'wdth' 100;
    font-size: 11vw;
  }
`

const exhale = keyframes`
  0% {
    font-variation-settings: 'wght' 100, 'wdth' 85;
    font-size: 10vw;
  }
  50% {
    font-variation-settings: 'wght' 700, 'wdth' 100;
    font-size: 11vw;
  }
  100% {
    font-variation-settings: 'wght' 100, 'wdth' 85;
    font-size: 10vw;
  }
`

/* Styled components */
const Text = styled.h1`
  font-weight: 100;
  font-size: 10vw;
  font-variation-settings: ${(props) => props.role === 'reverse' ? `'wght' 700, 'wdth' 100;` : `'wght' 100, 'wdth' 85;`};
  animation: ${(props) => props.role === 'reverse' ? css`${inhale} 4s infinite forwards;` : css`${exhale} 4s infinite forwards;`}
`

/* Second page */
const Second = () => (
  <Page color="#b4c3bb">
    <TextLayout>
      <Text>inhale</Text>
      <Text role="reverse">exhale</Text>
    </TextLayout>
  </Page>
)

export default Second