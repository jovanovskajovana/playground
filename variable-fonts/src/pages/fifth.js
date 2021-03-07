import React from 'react'
import styled, { keyframes } from 'styled-components'

import Page from '../components/Page'
import { TextLayout } from '../styles/PageLayout'


/* Animation keyframes */
const jump = keyframes`
  0% {
		transform: translateY(0%);
	}
	4% {
		transform: translateY(-0.04%);
	}
	8% {
		transform: translateY(-0.16%);
	}
	14% {
		transform: translateY(-0.17%);
	}
	18% {
		transform: translateY(0.04%);
	}
	26% {
		transform: translateY(0.58%);
	}
	28% {
		transform: translateY(0.55%);
	}
	40% {
		transform: translateY(-1.56%);
	}
	42% {
		transform: translateY(-1.64%);
	}
	56% {
		transform: translateY(4.63%);
	}
	58% {
		transform: translateY(4.4%);
	}
	72% {
		transform: translateY(-13.12%);
	}
	86% {
		transform: translateY(37.06%);
	}
	100% {
		transform: translateY(-100%);
	}
`

const fade  = keyframes`
  0% {
		opacity: 1;
	}
	4% {
		opacity: 1;
	}
	8% {
		opacity: 1;
	}
	14% {
		opacity: 1;
	}
	18% {
		opacity: 1;
	}
	26% {
		opacity: 1.01;
	}
	28% {
		opacity: 1.01;
	}
	40% {
		opacity: 0.98;
	}
	42% {
		opacity: 0.98;
	}
	56% {
		opacity: 1.05;
	}
	58% {
		opacity: 1.04;
	}
	72% {
		opacity: 0.87;
	}
	86% {
		opacity: 1.37;
	}
	96% {
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
`

/* Styled components */
const Text = styled.h1`
  font-weight: 700;
  font-size: 10vw;
  padding-bottom: 0.4em;
  margin-bottom: -0.4em;
  opacity: 0; 
  animation: ${fade} 2500ms infinite reverse;
  overflow: hidden;
`

const Char = styled.span`
  display: inline-block;
  animation: ${jump} 2500ms infinite;
  animation-delay: ${(props) => `calc((${props.charIndex} + 1) * 50ms)`};
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

/* Fifth Page */
const Fifth = () => (
  <Page color="#c1b9f5">
    <TextLayout>
      <SplitText text="jump" />
    </TextLayout>
  </Page>
)

export default Fifth
