import React from 'react';
import * as S from '../assets/pages-style/Home';

import Preview from '../components/preview';
import MathContainer from '../components/mathContainer';
import Equation from '../components/mathContainer/equation';
import Variables from '../components/mathContainer/variables';

const HomePage: React.FunctionComponent = (): JSX.Element => {
  return (
    <S.Wrapper>
      <MathContainer>
        <Equation />
        <Variables />
      </MathContainer>
      <Preview />
    </S.Wrapper>
  );
};

export default HomePage;
