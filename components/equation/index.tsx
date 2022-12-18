import * as S from './styled';
import React, { ChangeEvent, useContext } from 'react';

import { context } from '../../pages/equation';

interface Props {
  equation: string;
  handleEquation: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Equation: React.FunctionComponent<Props> = ({
  equation,
  handleEquation,
}): JSX.Element => {
  const formula = useContext(context);
  const parmColor = formula?.parms.reduce((acumulator, parm) => {
    return { ...acumulator, [parm.letter]: parm.color };
  }, {});

  return (
    <S.Wrapper>
      <S.EquationInput
        name='equation'
        value={equation}
        onChange={handleEquation}
      />
      <S.Preview>{equation.split('').map((char: string) => {
        return <S.Char color={(parmColor as any)[char]}>{char}</S.Char>
      })}</S.Preview>
    </S.Wrapper>
  );
};

export default Equation;
