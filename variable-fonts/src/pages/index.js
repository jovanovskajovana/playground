import React from 'react'
import styled, { keyframes } from 'styled-components'

import Page from '../components/Page'
import { TextLayout } from '../styles/PageLayout'


/* Animation keyframes */
const scale = keyframes`
	0% {
		transform: scale(0);
		font-variation-settings: 'wght' 100, 'wdth' 75;
    font-size: 8vw;
	}	
	40% {
		transform: scale(0.98);
		font-variation-settings: 'wght' 600, 'wdth' 100;
    font-size: 9vw;
	}	
	55% {
		transform: scale(0.86);
		font-variation-settings: 'wght' 100, 'wdth' 75;
    font-size: 8vw;
	}	
	100% {
		transform: scale(1);
		font-variation-settings: 'wght' 600, 'wdth' 100;
    font-size: 9vw;
	}	
`

/* Styled components */
const Text = styled.h1`
  font-weight: 100;
  font-size: 8vw;
`

const Char = styled.span`
  display: inline-block;
	transform: scale(0);
	transform-origin: 50% 100%;
	font-variation-settings: 'wght' 100, 'wdth' 75;
  animation: ${scale} 1500ms forwards;
  animation-delay: ${(props) => `calc((${props.charIndex} + 1) * 40ms)`};
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

/* First Page */
const First = () => (
  <Page color="#39424a">
    <TextLayout>
      <SplitText text="let's cheer up" />
    </TextLayout>
  </Page>
)

export default First
