import { FunctionComponent, useState } from 'react';
import Dashboard from '../components/Dashboard';
import Forms from '../components/Forms';
import calculate from '../math/calculate';
import * as S from '../styles/pages';

// assigned variables for evaluate
// parameters => complex scope with 10 base and diferent types
export type Scope = {
  values: {
    [key: string]: {
      value: number;
    };
  };
  unitys: {
    [key: string]: {
      unity: any;
    };
  };
};

// Results calculated from mathjs
export type Results = {
  simplifyed: {
    latex: string;
    error: string;
  };
  evaluate: {
    latex: string;
    error: string;
  };
  unity: {
    latex: string;
    error: string;
  };
};

const HomePage: FunctionComponent = () => {
  const [equation, setEquation] = useState<string>('');
  const [results, setResults] = useState<Results>();
  const [scope, setScope] = useState<Scope>();

  const handleChange = (tag: string, value: any) => {
    switch (tag) {
      case 'equation':
        console.log('Change equation:', value);
        setResults(calculate(value, scope));
        setEquation(value);
        break;
      case 'scope':
        console.log('Change scope:', value);
        setResults(calculate(equation, value));
        setScope(value);
        break;
      default:
        console.warn(`'${tag}' não é uma tag válida`);
        break;
    }
  };

  return (
    <S.Wrapper>
      <Dashboard results={results} />
      <Forms handleChange={handleChange} equation={equation} />
    </S.Wrapper>
  );
};

export default HomePage;
