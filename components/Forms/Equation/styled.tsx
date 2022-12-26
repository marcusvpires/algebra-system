import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  margin: 1rem;
  height: 180px;
  `;

export const EquationInput = styled.textarea`
  position: absolute;
  z-index: 1;
  height: 150px;
  width: 100%;
  padding: 1.5rem;
  resize: none;

  display: table-cell;
  vertical-align: middle;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: larger;
  background-color: #09090b;
  border-radius: 5px;
  
  color: #f2f2f3;
`;