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
        <S.Title>Simplificação</S.Title>
        <S.Expression>
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
        </S.Expression>
      </S.Result>
      <S.Result error={result?.error}>
        <S.Title>Resultado</S.Title>
        <S.Expression>
          {result?.evaluate ? result?.evaluate?.toString() : result?.error}
        </S.Expression>
      </S.Result>
      <S.Result error={result?.unity?.error}>
        <S.Title>Unidade calculada</S.Title>
        <S.Expression>
          {result?.unity?.simplified ? result?.unity?.simplified?.toString() : result?.unity?.error}
        </S.Expression>
      </S.Result>
    </S.Wrapper>
  );
};

export default Dashboard;
