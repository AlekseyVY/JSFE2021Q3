import styled from 'styled-components';

interface Props {
  Fill: boolean,
  Size: number,
}

export const FilterElementWrapper = styled.div<Props>`
  width: ${(props) => `${props.Size}px`};
  height: ${(props) => `${props.Size}px`};
  display: flex;
  align-items: center;
  fill: ${(props) => (props.Fill ? '#0c308a' : '#fff')};
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    fill: #f74705;
    transition: 0.3s ease-in-out;
  }
`;
