import styled from 'styled-components';

interface Props {
  Fill: boolean,
}

export const FilterElementWrapper = styled.div<Props>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  fill: ${(props) => (props.Fill ? '#0c308a' : '#fff')};

  &:hover {
    cursor: pointer;
    fill: #f74705;
  }
`;
