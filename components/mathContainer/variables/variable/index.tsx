import * as S from './styled';
import React, {
  FunctionComponent,
  useState,
  useEffect,
  ChangeEvent,
} from 'react';
import { prefixTable, PrefixType } from './prefixTabe';

type variableType = {
  title: string;
  letter: string;
  value: number;
  prefix: number;
  unity: string;
};

const Variable: FunctionComponent = (): JSX.Element => {
  const [prefixLabel, setPrefixLabel] = useState<PrefixType>({
    label: 'nda',
    caractere: '--',
  });
  const [variable, setVariable] = useState<variableType>({
    title: 'variavel',
    letter: 'v',
    value: 0,
    prefix: 0,
    unity: '',
  });

  useEffect(() => {
    try {
      let prefix = prefixTable[variable.prefix];
      if (!prefix) prefix = { label: 'nda', caractere: '--' };
      setPrefixLabel(prefix);
    } catch (err) {
      setPrefixLabel({ label: 'err', caractere: '--' });
    }
  }, [variable.prefix]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVariable({ ...variable, [event.target.name]: event.target.value });
  };

  return (
    <S.Wrapper>
      <S.Title
        type='text'
        name='title'
        value={variable.title}
        onChange={handleChange}
      />
      <S.Letter
        type='text'
        name='letter'
        value={variable.letter}
        onChange={handleChange}
        maxLength={1}
      />
      <span>=</span>
      <S.Value
        type='number'
        name='value'
        value={variable.value}
        onChange={handleChange}
      />
      <S.Small>10x</S.Small>
      <S.Prefix
        type='number'
        name='prefix'
        value={variable.prefix}
        onChange={handleChange}
      />
      <S.Small style={{ width: "6rem" }}>{prefixLabel.caractere} [ {prefixLabel.label} ]</S.Small>
      <S.Unity
        type='text'
        name='unity'
        value={variable.unity}
        onChange={handleChange}
      />
    </S.Wrapper>
  );
};

export default Variable;
