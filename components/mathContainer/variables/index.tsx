import * as S from './styled';
import React from 'react';

import Variable from './variable';

const Variables: React.FunctionComponent = (): JSX.Element => {
  return (
    <S.Wrapper>
      <Variable />
    </S.Wrapper>
  );
};

export default Variables;
