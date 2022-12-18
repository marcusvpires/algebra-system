import * as S from './styled';
import React, { useState, ChangeEvent, FocusEvent } from 'react';

const Equation: React.FunctionComponent = (): JSX.Element => {
  const [equation, setEquation] = useState('x + 1');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setEquation(event.target.value);

  return (
    <S.Wrapper>
      <S.EquationInput
        name='equation'
        value={equation}
        onChange={handleChange}
      />
      <S.Preview>{equation}</S.Preview>
    </S.Wrapper>
  );
};

export default Equation;
