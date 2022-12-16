import * as S from './styled';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const MathContainer: React.FunctionComponent<Props> = ({ children }): JSX.Element => {
  return (
    <S.Wrapper>
      { children && children }
    </S.Wrapper>
  );
};

export default MathContainer;
