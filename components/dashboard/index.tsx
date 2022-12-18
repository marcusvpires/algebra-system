import * as S from './styled';
import React, { FunctionComponent } from 'react';

import { Result, Colors } from '../../pages/equation';

interface Props {
  result: Result;
  colors: Colors | unknown;
}

const Dashboard: FunctionComponent<Props> = ({
  result,
  colors,
}): JSX.Element => {
  return (
    <S.Wrapper>
      <S.Result error={!result?.simplified}>
        {result?.simplified
          ? result?.simplified
              ?.toString()
              .split('')
              .map((char: string, index: number) => {
                return (
                  <S.Char key={index} color={(colors as any)[char]}>
                    {char}
                  </S.Char>
                );
              })
          : 'erro'}
      </S.Result>
      <S.Result error={result?.error}>
        {result?.evaluate ? result?.evaluate?.toString() : result?.error}
      </S.Result>
    </S.Wrapper>
  );
};

export default Dashboard;
