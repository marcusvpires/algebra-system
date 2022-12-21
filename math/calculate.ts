import { parse, simplify, evaluate, compile } from 'mathjs';
import { Scope, Results } from '../pages';

const calculate = (equation: string, scope: Scope | undefined) => {
  const results: Results = {
    simplifyed: { latex: '', error: '' },
    evaluate: { latex: '', error: '' },
    unity: { latex: '', error: '' },
  };
  try {
    results.simplifyed.latex = simplify(equation).toTex();
  } catch (error) {
    if (error instanceof Error) results.simplifyed.error = error.message;
    else results.simplifyed.error = 'erro ao simplificar';
  }
  if (scope) {
    try {
      console.log(scope.values)
      const expression = parse(equation)
      results.evaluate.latex = simplify(equation, scope).toTex()
      results.evaluate.latex = expression.compile().evaluate(scope.values);
    } catch (error) {
      if (error instanceof Error) results.evaluate.error = error.message;
      else results.evaluate.error = 'erro ao simplificar';
    }
    try {
      results.unity.latex = simplify(equation, scope.unitys).toTex();
    } catch (error) {
      if (error instanceof Error) results.unity.error = error.message;
      else results.unity.error = 'erro ao simplificar';
    }
  }
  console.table(results)
  return results;
};

export default calculate;
