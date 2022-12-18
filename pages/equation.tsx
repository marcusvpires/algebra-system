import React, {
  ChangeEvent,
  createContext,
  FunctionComponent,
  useState,
} from 'react';
import * as S from '../styles/pages/Equation';

import Parameters from '../components/Parameters';
import Equation from '../components/equation';

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
  const colors = ['red', 'purple', 'fuchsia', 'green', 'yellow', 'navy', 'blue']
  return {
    color: colors[Math.floor(Math.random()*7)],
    letter: 'x',
    value: 1,
    base10: 0,
    unity: undefined,
  }
} 

const EquationPage: FunctionComponent = (): JSX.Element => {
  const [formula, setFormula] = useState<Formula>({
    equation: 'x + y',
    parms: [
      {
        color: 'red',
        letter: 'x',
        value: 1,
        base10: 0,
        unity: undefined,
      },
      {
        color: 'blue',
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
    })
    setFormula({ equation: formula.equation, parms: newParms })
  };

  const handleNew = () => {
    setFormula({ equation: formula.equation, parms: [...formula.parms, defaultParm() ] });
  };

  return (
    <S.Wrapper>
      <context.Provider value={formula}>
        <Equation equation={formula.equation} handleEquation={handleEquation} />
        <Parameters parms={formula.parms} handleEdit={handleEdit} handleNew={handleNew} />
      </context.Provider>
    </S.Wrapper>
  );
};

export default EquationPage;
