import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import * as S from './styled';

import { Parameter } from '.';

interface Props {
  handleEdit: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
  index: number;
  value: Parameter;
}

const Input: FunctionComponent<Props> = ({ index, value, handleEdit }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    handleEdit(index, event);

  return (
    <S.Parameter>
      <S.Input
        width='1.8rem'
        type='text'
        name='key'
        value={value.key}
        placeholder='v'
        onChange={handleChange}
        maxLength={1}
      />
      <S.Span>=</S.Span>
      <S.InputNum
        width='8rem'
        type='text'
        name='value'
        placeholder='0'
        value={value.value}
        onChange={handleChange}
        maxLength={10}
      />
      <S.Span>.10^</S.Span>
      <S.InputNum
        width='2.5rem'
        type='number'
        name='base10'
        placeholder='0'
        value={value.base10}
        onChange={handleChange}
        maxLength={2}
        color='#f7545f'
      />
      <S.Input
        width='8rem'
        type='text'
        name='unity'
        value={value.unity}
        placeholder='u'
        onChange={handleChange}
        maxLength={10}
      />
    </S.Parameter>
  );
};

export default Input;
