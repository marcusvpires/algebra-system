import React, {
  ChangeEvent,
  createContext,
  FunctionComponent,
  useState,
} from 'react';
import styled from 'styled-components';

import Parameters from '../components/Parameters';
import Equation from '../components/equation';
import Dashboard from '../components/dashboard';

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

interface Formula {
  equation: string;
  parms: Parm[];
}

export const context = createContext<Formula | undefined>(undefined);

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
        unity: undefined,
      },
      {
        color: '#62aeef',
        letter: 'x',
        value: 2,
        base10: 0,
        unity: undefined,
      },
    ],
  });

  const handleEquation = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setFormula({ ...formula, equation: event.target.value });

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
    setFormula({ equation: formula.equation, parms: newParms });
  };

  const handleNew = () => {
    setFormula({
      equation: formula.equation,
      parms: [...formula.parms, defaultParm()],
    });
  };

  return (
    <Wrapper>
      <context.Provider value={formula}>
        <RightContainer>
          <Equation
            equation={formula.equation}
            handleEquation={handleEquation}
          />
          <Parameters
            parms={formula.parms}
            handleEdit={handleEdit}
            handleNew={handleNew}
          />
        </RightContainer>
        <Dashboard />
      </context.Provider>
    </Wrapper>
  );
};

export default EquationPage;
