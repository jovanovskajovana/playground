import React from 'react'
import styled, { keyframes } from 'styled-components'

import Page from '../components/Page'
import { TextLayout } from '../styles/PageLayout'


/* Animation keyframes */
const inhale = keyframes`
  0% {
    font-variation-settings: 'slnt' -10;
  }
  50% {
    font-variation-settings: 'slnt' 0;
  }
  100% {
    font-variation-settings: 'slnt' -10;
  }
`

/* Styled components */
const Text = styled.h1`
  font-weight: 600;
  font-size: 10vw;
  font-variation-settings: 'slnt' 0;
  animation: ${inhale} 1s infinite forwards;
`

const Fourth = () => (
  <Page color="#b4c3bb">
    <TextLayout>
      <Text>dance</Text>
    </TextLayout>
  </Page>
)

export default Fourth
