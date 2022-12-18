import * as S from './styled';
import React, { FunctionComponent, useContext } from 'react';

import { context } from '../../pages/equation';

const Dashboard: FunctionComponent = (): JSX.Element => {
  const formula = useContext(context);
  return <S.Wrapper><S.Simplify></S.Simplify></S.Wrapper>;
};

export default Dashboard;
