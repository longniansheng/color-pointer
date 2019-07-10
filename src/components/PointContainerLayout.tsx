import styled from 'styled-components';

interface StyledProps {
  x: number;
  y: number;
  color: string;
  radius: number;
}
const Container = styled.div`
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.6s;
  width: ${(props: StyledProps) => `${props.radius * 2}px`};
  height: ${(props: StyledProps) => `${props.radius * 2}px`};
  background-color: ${(props: StyledProps) => props.color};
  transform: ${(props: StyledProps) => `translate(${props.x}px, ${props.y}px)`};
`;

export default Container;
