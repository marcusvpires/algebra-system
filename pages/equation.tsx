import React, { FunctionComponent } from 'react';
import * as S from '../styles/pages/Equation'

import Parameters from '../components/Parameters';
import Equation from '../components/equation';

const EquationPage: FunctionComponent = (): JSX.Element => {
  return (
    <S.Wrapper>
      <Equation />
      <Parameters />
    </S.Wrapper>
  );
};

export default EquationPage;
