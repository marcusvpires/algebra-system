import React, { FunctionComponent } from 'react';
import * as S from '../styles/pages/Equation'

import Parameters from '../components/Parameters';

const EquationPage: FunctionComponent = (): JSX.Element => {
  return (
    <S.Wrapper>
      <Parameters />
    </S.Wrapper>
  );
};

export default EquationPage;
