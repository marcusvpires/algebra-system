import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

export const Container = styled.div`
  height: 6rem;
  width: auto;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #09090b;
  color: #f2f2f3;
`;

export const Label = styled.div`
  width: 100%;
  font-size: medium;
  color: #acacb4;
`;
