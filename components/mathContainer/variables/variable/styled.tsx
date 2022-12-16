import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 32rem;
  border: 2px solid #6f7479;
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  color: #c9d1d9;
  font-size: medium;
`;

export const Title = styled.input`
  width: 100%;
  background-color: #0d1117;
  padding: 0.8rem;
  font-size: medium;
  color: inherit;
  border-radius: 5px 5px 0 0;
  font-family: 'Courier New', Courier, monospace;
  outline-width: 0;
  border: none;
`;

export const Letter = styled.input`
  width: 3rem;
  padding: 0.8rem;
  font-size: medium;
  text-align: right;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  color: inherit;
  outline-width: 0;
  border: none;
`;

export const Value = styled.input`
  padding: 0.5rem;
  width: 8rem;
  outline-width: 0;
  border: none;
  color: inherit;
  background-color: transparent;
  font-size: medium;
  font-family: 'Courier New', Courier, monospace;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Small = styled.div`
  font-size: small;
  display: inline-block;
`;

export const Prefix = styled.input`
  width: 3rem;
  padding: 0.5rem;
  font-size: medium;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  color: inherit;
  outline-width: 0;
  border: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Unity = styled.input`
  width: 8rem;
  padding: 0.5rem;
  font-size: medium;
  text-align: right;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  color: inherit;
  outline-width: 0;
  border: none;
`;
