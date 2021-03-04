import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import Page from '../components/Page'
import { TextLayout } from '../styles/PageLayout'


/* Animation keyframes */
const inhale = keyframes`
  50% {
    font-variation-settings: 'wght' 700, 'wdth' 100;
  }
  100% {
    font-variation-settings: 'wght' 100, 'wdth' 85;
  }
`

const exhale = keyframes`
  50% {
    font-variation-settings: 'wght' 100, 'wdth' 85;
  }
  100% {
    font-variation-settings: 'wght' 700, 'wdth' 100;
  }
`

/* Styled components */
const Text = styled.h1`
  font-weight: 100;
  font-size: 10vw;
  font-variation-settings: ${(props) => props.role === 'reverse' ? `'wght' 100, 'wdth' 85;` : `'wght' 700, 'wdth' 100;`};
  animation: ${(props) => props.role === 'reverse' ? css`${inhale} 4s infinite forwards;` : css`${exhale} 4s infinite forwards;`}
`

/* First Page */
const SplitText = ({ text, role }) => (
  <Text role={role}>
    {text.split('').map((char, index) => (
      <span key={index}>
        {char}
      </span>
    ))}
  </Text>
)

/* First Page */
const First = () => (
  <Page color="#2a3035">
    <TextLayout>
      <Text>inhale</Text>
      <Text role="reverse">exhale</Text>
    </TextLayout>
  </Page>
)

export default First
