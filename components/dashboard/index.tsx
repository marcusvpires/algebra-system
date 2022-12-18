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
    value: string | null;
    error: string | null;
  };
  evaluate: {
    value: string | null;
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

const errorMessage = (error: any) => {
  let message = 'erro desconhecido';
  if (error instanceof Error) message = error.message;
  console.warn(message);
  return message;
};

const Dashboard: FunctionComponent = (): JSX.Element => {
  const [expression, setExpression] = useState<Expression>({
    simplify: { value: '', error: null },
    evaluate: { value: '', error: null },
  });
  const formula = useContext(context);
  const equation = formula?.equation?.trim();

  useEffect(() => {
    if (expression && equation) {
      const newExpression = expression;
      let simplified
      try {
        simplified = simplify(equation)
        newExpression.simplify = {
          value: simplified.toString(),
          error: null,
        };
      } catch (error) {
        newExpression.simplify = {
          value: null,
          error: errorMessage(error),
        };
      }
      if (simplified) {
        try {
          const parameters = formula?.parms.reduce((acumulator, parm) => {
            return { ...acumulator, [parm.letter]: parm.value };
          }, {})
          newExpression.evaluate = {
            value: simplified.evaluate(parameters),
            error: null,
          };
        } catch (error) {
          newExpression.simplify = {
            value: null,
            error: errorMessage(error),
          };
        }
      }
      console.log(equation)
      setExpression(newExpression);
    }
  }, [formula]);

  return (
    <S.Wrapper>
      <S.Simplify>{expression?.simplify?.value}</S.Simplify>
      <S.Simplify>{expression?.evaluate?.value}</S.Simplify>
    </S.Wrapper>
  );
};

export default Dashboard;
