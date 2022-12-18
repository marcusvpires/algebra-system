import * as S from './styled';
import React, { useState, ChangeEvent, FocusEvent } from 'react';

interface Props {
  equation: string,
  handleEquation: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const Equation: React.FunctionComponent<Props> = ({ equation, handleEquation }): JSX.Element => {
  return (
    <S.Wrapper>
      <S.EquationInput
        name='equation'
        value={equation}
        onChange={handleEquation}
      />
      <S.Preview>{equation}</S.Preview>
    </S.Wrapper>
  );
};

export default Equation;
