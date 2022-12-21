import * as S from './styled';
import React, { FunctionComponent } from 'react';

import { Results } from '../../pages';

interface Props {
  results: Results | undefined;
}

const Dashboard: FunctionComponent<Props> = ({ results }): JSX.Element => {
  return <S.Wrapper></S.Wrapper>;
};

export default Dashboard;
