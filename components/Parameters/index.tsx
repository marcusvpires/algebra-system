import React, { FunctionComponent } from 'react';
import * as S from './styled';

import Parameter from './parameter';

const Parameters: FunctionComponent = (): JSX.Element => {
  return (
    <S.Wrapper>
      <Parameter />
    </S.Wrapper>
  );
};

export default Parameters;
