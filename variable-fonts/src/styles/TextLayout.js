import styled, { css, keyframes } from 'styled-components'

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

const TextLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Text = styled.h1`
  font-weight: 100;
  font-size: 10vw;
  letter-spacing: -0.1em;
  text-transform: uppercase;
  font-variation-settings: ${(props) => props.role === 'reverse' ? `'wght' 100, 'wdth' 85;` : `'wght' 700, 'wdth' 100;`};
  animation: ${(props) => props.role === 'reverse' ? css`${inhale} 4s infinite forwards;` : css`${exhale} 4s infinite forwards;`}
`

const Char = styled.span`
/* font-variation-settings: 'wght' 700, 'wdth' 100; */
  /* animation: ${inhale} infinite forwards; */
  /* animation-delay: ${(props) => `calc((${props.charIndex} + 1) * 400ms)`}; */
`

export { TextLayout, Text, Char }
