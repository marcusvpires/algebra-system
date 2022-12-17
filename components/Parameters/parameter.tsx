import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import * as S from './styled';

import { Parm } from '.';

interface Props {
  handleEdit: Function;
  index: number;
  parm: Parm;
}

interface PrefixTableType {
  [key: number]: string;
}

export const prefix: PrefixTableType = {
  [15]: 'P',
  [12]: 'T',
  [9]: 'G',
  [6]: 'M',
  [3]: 'k',
  [2]: 'h',
  [1]: 'da',
  [0]: 'N',
  [-1]: 'd',
  [-2]: 'c',
  [-3]: 'm',
  [-6]: 'μ',
  [-9]: 'n',
  [-12]: 'p',
};

const Parameter: FunctionComponent<Props> = ({
  handleEdit,
  index,
  parm,
}): JSX.Element => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    handleEdit(index, event);

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
        width='8rem'
        type='number'
        name='value'
        placeholder='0'
        value={parm.value}
        onChange={handleChange}
        maxLength={10}
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
      <S.Span
        style={{ width: '3rem' }}
      >{prefix[parm.base10] ? prefix[parm.base10] : 'nd'}</S.Span>
      <S.Input
        width='8rem'
        type='text'
        name='unity'
        value={parm.unity}
        placeholder='u'
        onChange={handleChange}
        maxLength={10}
      />
    </S.Parameter>
  );
};

export default Parameter;
