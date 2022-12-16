import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 20vh;
  width: 60vw;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #6f7479;
`;

export const Input = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  font-size: x-large;
  color: #c9d1d9;
  background-color: transparent;
  border: 2px solid #9da9d1;
  resize: none;
  outline-width: 0;
  
  &::-webkit-scrollbar {
    width: 0.3em;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #9da9d1;
    outline: 1px solid slategrey;
  }
`;
