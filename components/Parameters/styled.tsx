import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 35rem;
  height: 100vh;
  padding: 2rem;
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  background-color: #181b2e;
  font-family: 'Courier New', Courier, monospace;
`;

export const Parameter = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  font-size: large;
  color: #f2f2f3;
`;

export const Color = styled.div`
  height: 0.8rem;
  width: 0.8rem;
  padding: 0;
  margin: .5rem;
  margin-right: 1.5rem;
  border-radius: 50%;
  border: none;
`;

export const ColorLabel = styled.label`
  position: relative;
  height: 0.8rem;
  width: 0.8rem;
  display: block;
  padding: 0;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export const ColorInput = styled.input`
  position: relative;
  top: -0.8rem;
  height: 0.8rem;
  width: 0.8rem;
  padding: 0;
  border: none;
  opacity: 0;
  cursor: pointer;
`;

export const Input = styled.input`
  width: ${(props) => props.width};
  padding: .5rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: large;
  color: #f2f2f3;
  /* background-color: red; */
`;

export const Span = styled.div`
  padding: .5rem;
  color: #5e79ff;
`;

export const InputNum = styled.input`
  width: ${(props) => props.width};
  padding: .5rem;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: large;
  color: ${props => props.color ? props.color : '#f2f2f3'};

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;