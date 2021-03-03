import React from 'react'

import { Text, Char } from '../styles/TextLayout'

const SplitText = ({ text, role }) => (
  <Text role={role} lenght="4s">
    {text.split('').map((char, index) => (
      <Char key={index} charIndex={index}>
        {char}
      </Char>
    ))}
  </Text>
)

export default SplitText
