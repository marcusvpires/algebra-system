import styled from 'styled-components';

export const Wrapper = styled.section`
  min-width: 35rem;
  height: 100%;
  padding: 1rem;
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  font-family: 'Courier New', Courier, monospace;
`;

export const NewButton = styled.button`
  width: auto;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: medium;
  color: #f2f2f3;
  background-color: #272A42;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  cursor: pointer;

`
export const Parameter = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  font-size: large;
  color: #f2f2f3;
  padding-top: 0.5rem;
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
  text-align: center;
  font-size: large;
  color: #f2f2f3;
`;

export const Span = styled.div`
  padding: .5rem;
  color: #8162FF;
`;

export const Delete = styled.div`
  padding: .5rem;
  color: #e95454;
  margin-left: auto;
  user-select: none;
  cursor: pointer;
`;

