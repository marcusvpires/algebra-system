import * as S from './styled';
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react';

import { simplify, evaluate } from 'mathjs';
import { context } from '../../pages/equation';

type Expression = {
  simplify: {
    value: string;
    error: string | null;
  };
  evaluate: {
    value: string;
    error: string | null;
  };
};

const updateExpession = (
  equation: string,
  method: (equation: string) => any
) => {
  try {
    return {
      value: simplify(equation as string).toString(),
      error: null,
    };
  } catch (error) {
    let message = 'erro desconhecido';
    if (error instanceof Error) message = error.message;
    console.warn(message);
    return {
      value: 'error',
      error: message,
    };
  }
};

const Dashboard: FunctionComponent = (): JSX.Element => {
  const [expression, setExpression] = useState<Expression>({
    simplify: { value: '', error: null },
    evaluate: { value: '', error: null },
  });
  const formula = useContext(context);
  const equation = formula?.equation;

  useEffect(() => {
    if (expression && equation) {
      setExpression({
        simplify: updateExpession(equation, simplify),
        evaluate: updateExpession(equation, evaluate),
      });
    }
  }, [equation]);

  return (
    <S.Wrapper>
      <S.Simplify>{expression?.simplify?.value}</S.Simplify>
      <S.Simplify>{expression?.evaluate?.value}</S.Simplify>
    </S.Wrapper>
  );
};

export default Dashboard;
