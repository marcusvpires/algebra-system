import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import * as S from './styled';

import Parameter from './parameter';

export interface Parm {
  color: string;
  letter: string;
  value: number;
  base10: number;
  unity: string;
}

const defaultParm = {
  color: '#2cd9c5',
  letter: 'a',
  value: 0,
  base10: 0,
  unity: 'u',
};

const Parameters: FunctionComponent = (): JSX.Element => {
  const [parms, setParms] = useState<Parm[]>([
    defaultParm,
    defaultParm,
    defaultParm,
  ]);

  const handleEdit = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    setParms((prevParms) =>
      prevParms.map((parm, i) => {
        const tg = event.target;
        if (index === i) {
          if (tg.maxLength && tg.value.toString().length > tg.maxLength)
            return parm;
          else return { ...parm, [tg.name]: tg.value };
        }
        return parm;
      })
    );
  };

  const handleNew = () => {
    setParms([...parms, defaultParm]);
  };

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
