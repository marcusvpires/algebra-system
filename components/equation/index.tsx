import * as S from './styled';
import React, { ChangeEvent } from 'react';
import { Colors } from '../../pages/equation';

interface Props {
  equation: string;
  handleEquation: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  colors: Colors | unknown;
}

const Equation: React.FunctionComponent<Props> = ({
  equation,
  handleEquation,
  colors,
}): JSX.Element => {
  return (
    <S.Wrapper>
      <S.EquationInput
        name='equation'
        value={equation}
        onChange={handleEquation}
      />
      <S.Preview>
        {equation.split('').map((char: string, index: number) => {
          return (
            <S.Char key={index} color={(colors as any)[char]}>
              {char}
            </S.Char>
          );
        })}
      </S.Preview>
    </S.Wrapper>
  );
};

export default Equation;
