import * as S from './styled';
import React, { ChangeEvent } from 'react';

interface Props {}

const Collection: React.FunctionComponent<Props> = ({}): JSX.Element => {
  return (
    <S.Wrapper>
      <S.Equation>
        <S.Title>campo magnetico</S.Title>
        <S.Expession>213,12394</S.Expession>
      </S.Equation>
    </S.Wrapper>
  );
};

export default Collection;
