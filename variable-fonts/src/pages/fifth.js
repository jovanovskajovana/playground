import React from 'react'
import styled, { keyframes } from 'styled-components'

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

/* Styled components */
const Text = styled.h1`
  font-weight: 100;
  font-size: 10vw;
  font-variation-settings: 'wght' 700, 'wdth' 100;
  animation: ${inhale} 4s infinite forwards;
`

//edna po edna bukva da skokat
const Fifth = () => (
  <Page color="#c1b9f5">
    <TextLayout>
      <Text>jump</Text>
    </TextLayout>
  </Page>
)

export default Fifth
