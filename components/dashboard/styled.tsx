import styled from 'styled-components';

export const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
`;

interface SimplifyProps {
  error: boolean | any
}

export const Result = styled.div<SimplifyProps>`
  background-color: #0a0a0c;
  border-radius: 5px;
  margin: 1rem;
  padding: 1.5rem;
  height: 10rem;
  width: auto;
  font-size: ${props => props.error ? 'medium' : 'larger'};
  border: ${props => props.error ? '2px solid #e06b74' : 'none'};
  color: #f1f1f2;
`

export const Char = styled.span`
  color: ${props => props.color ? props.color : 'inherit'};
`