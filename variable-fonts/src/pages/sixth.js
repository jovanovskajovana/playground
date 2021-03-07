import React from 'react'
import styled, { keyframes } from 'styled-components'

import Page from '../components/Page'
import { TextLayout } from '../styles/PageLayout'


/* Animation keyframes */
const bounce = keyframes`
  0% {
		transform: scale(1);
	}
	4% {
		transform: scale(1);
	}
	8% {
		transform: scale(1);
	}
  14% {
		transform: scale(1);
	}
	18% {
		transform: scale(1);
	}
	26% {
		transform: scale(1.01);
	}
	28% {
		transform: scale(1.01);
	}
	40% {
		transform: scale(0.98);
	}
	42% {
		transform: scale(0.98);
	}
	56% {
		transform: scale(1.05);
	}
	58% {
		transform: scale(1.04);
	}
	72% {
		transform: scale(0.87);
	}
	86% {
		transform: scale(1.37);
	}
	100% {
		transform: scale(0);
	}
`

/* Styled components */
const Text = styled.h1`
  font-weight: 100;
  font-size: 10vw;
`

const Char = styled.span`
  display: inline-block;
  animation: ${bounce} 3000ms infinite reverse;
  /* animation-delay: ${(props) => `calc((${props.charIndex} + 1) * 300ms)`}; */
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

/* Sixt Page */
const Sixth = () => (
  <Page color="#aabce3">
    <TextLayout>
      <SplitText text="repeat" />
    </TextLayout>
  </Page>
)

export default Sixth
