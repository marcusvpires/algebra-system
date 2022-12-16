import React from 'react';
import * as S from '../assets/pages-style/Home';

import Equation from '../components/equation';

const HomePage: React.FunctionComponent = (): JSX.Element => {
  return (
    <S.Wrapper>
      <Equation />
    </S.Wrapper>
  );
};

export default HomePage;
