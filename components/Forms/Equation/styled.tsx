import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  height: 12rem;
`;

export const EquationInput = styled.textarea`
  position: absolute;
  z-index: 1;
  height: 10rem;
  width: 100%;
  padding: 1.5rem;
  background-color: transparent;
  font-family: 'Courier New', Courier, monospace;
  font-size: larger;
  /* color: transparent; */
  resize: none;
  border: none;
  outline: none;
  caret-color: #f2f2f3;
`;

export const Preview = styled.div`
  z-index: 0;
  padding: 1.5rem;
  height: 10rem;
  width: 100%;
  background-color: #0a0a0c;
  font-family: 'Courier New', Courier, monospace;
  font-size: larger;
  color: #f2f2f3;
`;

export const Char = styled.span`
  color: ${(props) => (props.color ? props.color : 'inherit')};
`;
