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
        type='text'
        name='key'
        value={value.key}
        placeholder='v'
        onChange={handleChange}
        maxLength={2}
        width='2.5rem'
      />
      <S.Span>=</S.Span>
      <S.Input
        width='8rem'
        type='text'
        name='value'
        placeholder='0'
        value={value.value}
        onChange={handleChange}
        maxLength={10}
      />
      <S.Span>.10^</S.Span>
      <S.Input
        width='3rem'
        type='text'
        name='base10'
        placeholder='0'
        value={value.base10}
        onChange={handleChange}
        maxLength={3}
      />
      <S.Input
        width='10rem'
        type='text'
        name='unity'
        value={value.unity}
        placeholder='u'
        onChange={handleChange}
        maxLength={10}
      />
      <S.Delete>X</S.Delete>
    </S.Parameter>
  );
};

export default Input;
