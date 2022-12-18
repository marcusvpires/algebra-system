import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { parse, simplify } from 'mathjs';

import Parameters from '../components/Parameters';
import Equation from '../components/equation';
import Dashboard from '../components/dashboard';
import Collection from '../components/collection';

export const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0d1117;
  font-family: 'Courier New', Courier, monospace;
  font-size: medium;
`;

export const RightContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

export type Parm = {
  color: string;
  letter: string;
  value: number;
  base10: number;
  unity: string | undefined;
};

export type Result = {
  simplified: string | number | undefined;
  evaluate: string | number | undefined;
  unity: {
    simplified: string | number | undefined;
    error: string | null;
  };
  error: string | null;
};

export type Colors = {
  [key: string]: string;
};

interface Formula {
  equation: string;
  parms: Parm[];
  result: Result;
  colors: Colors | unknown;
}

const defaultParm = () => {
  const colors = [
    '#e06b74',
    '#98c379',
    '#e5c07a',
    '#62aeef',
    '#c678dd',
    '#55b6c2',
  ];
  return {
    color: colors[Math.floor(Math.random() * 7)],
    letter: 'x',
    value: 1,
    base10: 0,
    unity: undefined,
  };
};

const EquationPage: FunctionComponent = (): JSX.Element => {
  const [formula, setFormula] = useState<Formula>({
    equation: 'x + y',
    parms: [
      {
        color: '#e06b74',
        letter: 'x',
        value: 1,
        base10: 0,
        unity: 'u',
      },
      {
        color: '#62aeef',
        letter: 'y',
        value: 2,
        base10: 0,
        unity: 'v',
      },
    ],
    colors: { x: '#e06b74', y: '#62aeef' },
    result: {
      simplified: 'x + y',
      evaluate: 3,
      unity: {
        simplified: 'u + v',
        error: null
      },
      error: null,
    },
  });

  const calculate = (equation: string, parms: Parm[]) => {
    const variables = parms.reduce((acumulator, parm) => {
      return { ...acumulator, [parm.letter]: parm.value };
    }, {});
    const unityVars = parms.reduce((acumulator, parm) => {
      return { ...acumulator, [parm.letter]: parm.unity };
    }, {});
    let errorMessage = null;
    let expression;
    let simplified;
    let evaluate;
    let unityErrorMessage = null;
    let unitySimplified;
    try {
      let unityExpression = equation;
      Object.entries(unityVars).forEach(([letter, unity]) => {
        unityExpression = unityExpression.replaceAll(letter, unity as string);
      });
      expression = parse(unityExpression);
      unitySimplified = simplify(expression);
    } catch (error) {
      unityErrorMessage = 'erro desconhecido';
      if (error instanceof Error) unityErrorMessage = error.message;
      console.warn(unityErrorMessage);
    }
    try {
      expression = parse(equation);
      simplified = simplify(expression);
      evaluate = simplified.evaluate(variables);
    } catch (error) {
      errorMessage = 'erro desconhecido';
      if (error instanceof Error) errorMessage = error.message;
      console.warn(errorMessage);
    }
    console.table({
      simplified: simplified?.toString(),
      evaluate: evaluate,
      unity: {
        error: unityErrorMessage,
        simplified: unitySimplified?.toString(),
      },
      error: errorMessage,
    });
    return {
      simplified: simplified?.toString(),
      evaluate: evaluate,
      unity: {
        error: unityErrorMessage,
        simplified: unitySimplified?.toString(),
      },
      error: errorMessage,
    };
  };

  const setColors = (parms: Parm[]) => {
    return parms.reduce((acumulator, parm) => {
      return { ...acumulator, [parm.letter as keyof Colors]: parm.color };
    });
  };

  const handleEquation = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormula({
      parms: formula.parms,
      equation: event.target.value,
      result: calculate(event.target.value, formula.parms),
      colors: formula.colors,
    });
  };

  const handleEdit = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newParms = formula.parms.map((parm, i) => {
      const tg = event.target;
      if (index === i) {
        if (tg.maxLength && tg.value.toString().length > tg.maxLength)
          return parm;
        else return { ...parm, [tg.name]: tg.value };
      }
      return parm;
    });
    setFormula({
      equation: formula.equation,
      parms: newParms,
      result: calculate(formula.equation, newParms),
      colors: setColors(newParms),
    });
  };

  const handleNew = () => {
    const newParms = [...formula.parms, defaultParm()];
    setFormula({
      equation: formula.equation,
      parms: newParms,
      result: formula.result,
      colors: setColors(newParms),
    });
  };

  return (
    <Wrapper>
      <Dashboard result={formula.result} colors={formula.colors} />
      <Collection />
      <RightContainer>
        <Equation
          equation={formula.equation}
          handleEquation={handleEquation}
          colors={formula.colors}
        />
        <Parameters
          parms={formula.parms}
          handleEdit={handleEdit}
          handleNew={handleNew}
        />
      </RightContainer>
    </Wrapper>
  );
};

export default EquationPage;
