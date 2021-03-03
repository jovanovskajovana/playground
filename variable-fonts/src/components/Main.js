import React from 'react';

import GlobalStyles from '../styles/GlobalStyles'
import { TextLayout } from '../styles/TextLayout'
import SplitText from './SplitText'

const Main = () => {
  return (
    <>
      <GlobalStyles />
      <TextLayout>
        <SplitText text="inhale" />
        <SplitText text="exhale" role="reverse" />
      </TextLayout>
      <TextLayout>
        <SplitText text="waves" />
      </TextLayout>
    </>
  );
}

export default Main;
