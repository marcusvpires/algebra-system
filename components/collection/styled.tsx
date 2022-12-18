import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  width:25rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  background-color: #07070a;
  border-color: #3e3841;
  border-style: solid;
  border-left-width: 1px;
  border-right-width: 1px;
`;

export const Equation = styled.div`
  padding: 1rem;
  border-color: #3e3841;
  border-style: solid;
  border-bottom-width: 1px;
`

export const Title = styled.div`
  font-size: medium;
  color: #ccccd3;
  padding-bottom: 1rem;
`

export const Expession = styled.div`
  font-size: larger;
  text-align: right;
  color: #f1f1f2;
`