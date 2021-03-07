import React from 'react'
import styled, { keyframes } from 'styled-components'

import Page from '../components/Page'
import { TextLayout } from '../styles/PageLayout'


/* Animation keyframes */
const inhale = keyframes`
  0% {
    font-variation-settings: 'wght' 100, 'slnt' -2;
  }
  50% {
    font-variation-settings: 'wght' 600, 'slnt' -10;
  }
  100% {
    font-variation-settings: 'wght' 100, 'slnt' -2;
  }
`

/* Styled components */
const Text = styled.h1`
  font-weight: 100;
  font-size: 8vw;
  font-variation-settings: 'wght' 100, 'slnt' -2;
  animation: ${inhale} 1600ms 200ms infinite forwards;
`

/* Fourth Page */
const Fourth = () => (
  <Page color="#aedfd2">
    <TextLayout>
      <Text>dance</Text>
    </TextLayout>
  </Page>
)

export default Fourth
