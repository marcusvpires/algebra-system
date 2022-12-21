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
    setArray([ ...newArray ]);
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
