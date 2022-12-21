import { FunctionComponent } from 'react';
import Equation from './Equation';
import Parameters from './Parameters';

import * as S from './styled'

interface Props {
  equation: string;
  handleChange: (tag: string, value: any) => void;
}

const Forms: FunctionComponent<Props> = ({ equation, handleChange }) => {
  return (
    <S.Wrapper>
      <Equation equation={equation} handleChange={handleChange} />
      <Parameters handleChange={handleChange} />
    </S.Wrapper>
  );
};

export default Forms