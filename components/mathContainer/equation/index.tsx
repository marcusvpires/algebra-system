import * as S from './styled';
import React, { FunctionComponent, useState, ChangeEvent } from 'react';

const Equation: FunctionComponent = (): JSX.Element => {
  const [equation, setEquation] = useState<string>("x + 3");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEquation(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.Input value={equation} onChange={handleChange} />
    </S.Wrapper>
  );
};

export default Equation;
