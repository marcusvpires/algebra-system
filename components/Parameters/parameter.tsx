import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import * as S from './styled';

interface Parm {
  color: string;
  letter: string;
  value: number;
  base10: number;
  unity: string;
}

const defaultParm = {
  color: '#2cd9c5',
  letter: 'a',
  value: 0,
  base10: 0,
  unity: 'u',
};

const Parameter: FunctionComponent = (): JSX.Element => {
  const [parm, setParm] = useState<Parm>(defaultParm);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.type === 'number') {
      if (event.target.value.toString().length > event.target.maxLength) return;
      console.log(event.target.value);
    }
    setParm({ ...parm, [event.target.name]: event.target.value });
  };

  return (
    <S.Parameter>
      <S.Color>
        <S.ColorLabel htmlFor='color' color={parm.color} />
        <S.ColorInput
          name='color'
          type='color'
          value={parm.color}
          onChange={handleChange}
        />
      </S.Color>
      <S.Input
        width='1.8rem'
        type='text'
        name='letter'
        value={parm.letter}
        placeholder='v'
        onChange={handleChange}
        maxLength={1}
      />
      <S.Span>=</S.Span>
      <S.InputNum
        width='10rem'
        type='number'
        name='value'
        placeholder='0'
        value={parm.value}
        onChange={handleChange}
        maxLength={14}
      />
      <S.Span>.10^</S.Span>
      <S.InputNum
        width='2.5rem'
        type='number'
        name='base10'
        placeholder='0'
        value={parm.base10}
        onChange={handleChange}
        maxLength={2}
        color='#f7545f'
      />
      <S.Input
        width='8rem'
        type='text'
        name='unity'
        value={parm.unity}
        placeholder='u'
        onChange={handleChange}
        maxLength={11}
      />
    </S.Parameter>
  );
};

export default Parameter;
