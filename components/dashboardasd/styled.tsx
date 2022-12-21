import styled from 'styled-components';

export const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

interface SimplifyProps {
  error: boolean | any;
}

export const Result = styled.div<SimplifyProps>`
  height: 6rem;
  width: auto;
  margin: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  background-color: #0a0a0c;
  border: ${(props) => (props.error ? '2px solid #e06b74' : 'none')};
  border-radius: 5px;
  font-size: ${(props) => (props.error ? 'medium' : 'larger')};
`;

export const Title = styled.div`
  padding-bottom: 1rem;
  font-size: medium;
  color: #ccccd3;
`;

export const Expression = styled.div`
  color: #f1f1f2;
  text-align: right;
`;

export const Char = styled.span`
  color: ${(props) => (props.color ? props.color : 'inherit')};
`;
