import { parse } from 'mathjs';
import React, { FunctionComponent, ChangeEvent, useState } from 'react';
import Input from './Input';
import * as S from './styled';

interface Props {
  handleChange: (tag: string, value: any) => void;
}

// complex component to be converted to scope
export type Parameter = {
  base10: string;
  unity: string;
  value: string;
  key: string;
};

const Parameters: FunctionComponent<Props> = ({ handleChange }) => {
  const [array, setArray] = useState<Parameter[]>([]);

  const scopeParser = (parameters: Parameter[]) => {
    try {
      const values = parameters.reduce((acc, crr) => {
        let multiplier = 1;
        if (String(crr.key).trim() === '') return acc;
        if (parseFloat(crr.base10)) multiplier = 10 ** parseFloat(crr.base10);
        const value = parseFloat(crr.value) * multiplier;
        return { ...acc, [crr.key]: value };
      }, {});
      const unitys = parameters.reduce((acc, crr) => {
        let unity
        try {
          if (!crr.unity) unity = parse('u')
          else unity = parse(crr.unity)
        } catch (error) {
          unity = parse('u')
          console.warn(error);
        }
        return ({ ...acc, [crr.key]: unity })
      }, {});
      handleChange('scope', { values, unitys });
    } catch (error) {
      if (error instanceof Error) console.warn(error.message);
      else console.warn("erro ao compilar 'scope'");
    }
  };

  const handleEdit = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const newArray: Parameter[] = array;
    const parameter = array[index];
    const target = event.target;
    let key: keyof typeof parameter;

    if (target.name in parameter) {
      key = target.name as keyof typeof parameter;
      parameter[key] = String(target.value);
    } else {
      console.error(
        `${target.name} não é uma chave válida para o tipo 'Parameter'`
      );
    }
    newArray[index] = parameter;
    scopeParser(newArray);
    setArray([...newArray]);
  };

  const handleNew = () => {
    setArray([...array, { base10: '', unity: '', value: '', key: '' }]);
  };

  return (
    <S.Wrapper>
      <S.NewButton onClick={handleNew}>Nova variável</S.NewButton>
      {array.map((parameter, index) => (
        <Input
          key={index}
          index={index}
          value={parameter}
          handleEdit={handleEdit}
        />
      ))}
    </S.Wrapper>
  );
};

export default Parameters;
