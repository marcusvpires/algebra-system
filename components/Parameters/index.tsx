import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import * as S from './styled';

import Parameter from './parameter';
import { Parm } from '../../pages/equation';

interface Props {
  parms: Parm[];
  handleEdit: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
  handleNew: () => void;
}

const Parameters: FunctionComponent<Props> = ({
  parms,
  handleEdit,
  handleNew,
}): JSX.Element => {
  return (
    <S.Wrapper>
      <S.New onClick={handleNew}>Nova variável</S.New>
      {parms.map((parm, index) => (
        <Parameter
          key={index}
          index={index}
          parm={parm}
          handleEdit={handleEdit}
        />
      ))}
    </S.Wrapper>
  );
};

export default Parameters;
