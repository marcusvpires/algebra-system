import * as S from './styled';
import React, { FunctionComponent } from 'react';

import { Results } from '../../pages';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css'

interface Props {
  results: Results | undefined;
}

const Dashboard: FunctionComponent<Props> = ({ results }): JSX.Element => {
  if (results)
    return (
      <S.Wrapper>
        <S.Container>
          <S.Label>RESULTADO</S.Label>
          <Latex>{`$$ ${results?.evaluate.latex} $$`}</Latex>
        </S.Container>
        <S.Container>
          <S.Label>SIMPLIFICAÇÃO</S.Label>
          <Latex>{`$$ ${results?.simplifyed.latex} $$`}</Latex>
        </S.Container>
        <S.Container>
          <S.Label>UNIDADE</S.Label>
          <Latex>{`$$ ${results?.unity.latex} $$`}</Latex>
        </S.Container>
      </S.Wrapper>
    );
  else return <S.Wrapper />;
};

export default Dashboard;
