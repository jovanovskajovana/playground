import React from 'react'
import styled, { keyframes } from 'styled-components'

import Page from '../components/Page'
import { TextLayout } from '../styles/PageLayout'


/* Animation keyframes */
const scale = keyframes`
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
		transform: scale(1.37);
	}
`

// const fade  = keyframes`
//   0% {
// 		opacity: 1;
// 	}
// 	4% {
// 		opacity: 1;
// 	}
// 	8% {
// 		opacity: 1;
// 	}
// 	14% {
// 		opacity: 1;
// 	}
// 	18% {
// 		opacity: 1;
// 	}
// 	26% {
// 		opacity: 1.01;
// 	}
// 	28% {
// 		opacity: 1.01;
// 	}
// 	40% {
// 		opacity: 0.98;
// 	}
// 	42% {
// 		opacity: 0.98;
// 	}
// 	56% {
// 		opacity: 1.05;
// 	}
// 	58% {
// 		opacity: 1.04;
// 	}
// 	72% {
// 		opacity: 0.87;
// 	}
// 	86% {
// 		opacity: 1.37;
// 	}
// 	100% {
// 		opacity: 0;
// 	}
// `

/* Styled components */
const Text = styled.h1`
  font-weight: 600;
  font-size: 10vw;
`

const Char = styled.span`
  display: inline-block;
  animation: ${scale} 3000ms infinite reverse;
  animation-delay: ${(props) => `calc((${props.charIndex} + 1) * 300ms)`};
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
  <Page color="#2a3035">
    <TextLayout>
      <SplitText text="let's cheer up" />
    </TextLayout>
  </Page>
)

export default First
