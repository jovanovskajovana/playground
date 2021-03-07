import React from 'react'
import styled, { keyframes } from 'styled-components'

import Page from '../components/Page'
import { TextLayout } from '../styles/PageLayout'


/* Animation keyframes */
const move = keyframes`
  0% {
    font-variation-settings: 'wght' 100, 'wdth' 75;
    font-size: 10vw;
  }
  60% {
    font-variation-settings: 'wght' 700, 'wdth' 100;
    font-size: 11vw;
  }
  
  100% {
    font-variation-settings: 'wght' 100, 'wdth' 75;
    font-size: 10vw;
  }
`

/* Styled components */
const Text = styled.h1`
  font-weight: 100;
  font-size: 10vw;
`

const Char = styled.span`
  font-variation-settings: 'wght' 100, 'wdth' 75;
  animation: ${move} 2500ms infinite both;
  animation-delay: ${(props) => `calc((${props.charIndex} + 1) * 250ms)`};
`

/* Helper component: Splits text into chars to animate each char */
const SplitText = ({ text }) => (
  <Text>
    {text.split('').map((char, index) => (
      <Char key={index} charIndex={index}>
        {char}
      </Char>
    ))}
  </Text>
)

/* Third Page */
const Third = () => (
  <Page color="#ffbaba">
    <TextLayout>
      <SplitText text="mooove" />
    </TextLayout>
  </Page>
)

export default Third
