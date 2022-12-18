import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 10rem;
  max-width: 40rem;
`;

export const EquationInput = styled.textarea`
  position: absolute;
  z-index: 1;
  height: 10rem;
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  font-family: 'Courier New', Courier, monospace;
  font-size: large;
  color: transparent;
  resize: none;
  border: none;
  outline: none;
  caret-color: #f2f2f3;
`;

export const Preview = styled.div`
  position: absolute;
  z-index: 0;
  padding: 1rem;
  height: 10rem;
  width: 100%;
  background-color: #140e2c;
  font-family: 'Courier New', Courier, monospace;
  font-size: large;
  color: #f2f2f3;
`;

export const Char = styled.span`
  color: ${props => props.color ? props.color : 'inherit'};
`