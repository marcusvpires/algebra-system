import styled from 'styled-components';

export const Wrapper = styled.section`
  flex-grow: 1;
`;

interface SimplifyProps {
  error: boolean | any
}

export const Simplify = styled.div<SimplifyProps>`
  background-color: #0a0a0c;
  border-radius: 5px;
  margin: 1rem;
  padding: 1.5rem;
  height: 10rem;
  width: 50%;
  font-size: ${props => props.error ? 'medium' : 'larger'};
  color: #f1f1f2;
  border: ${props => props.error ? '2px solid #e06b74' : 'none'};
`