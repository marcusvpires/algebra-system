import { type } from 'os';
import { FunctionComponent, useState } from 'react';
import Dashboard from '../components/Dashboard';
import Forms from '../components/Forms';
import * as S from '../styles/pages';

// assigned variables for evaluate
// parameters => complex scope with 10 base and diferent types
export type Scope = {
  [key: string]: {
    value: number;
    unity: string;
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
  const [results, setResults] = useState<Results>()
  const [scope, setScope] = useState<Scope>({});

  const handleChange = (tag: string, value: any) => {
    console.log(tag, value)
  }

  return (
    <S.Wrapper>
      <Dashboard results={results} />
      <Forms handleChange={handleChange} equation={equation} />
    </S.Wrapper>
  );
};

export default HomePage;
