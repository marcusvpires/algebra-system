import * as S from './styled';
import { ChangeEvent, FunctionComponent } from 'react';

interface Props {
  equation: string;
  handleChange: (tag: string, value: any) => void;
}

const Equation: FunctionComponent<Props> = ({ equation, handleChange }) => {
  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange('equation', event.target.value);
  }
  return (
    <S.Wrapper>
      <S.EquationInput
        name='equation'
        value={equation}
        onChange={handleInput}
      />
    </S.Wrapper>
  );
};

export default Equation;
