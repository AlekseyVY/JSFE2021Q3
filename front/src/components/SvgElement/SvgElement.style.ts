import styled from 'styled-components';

interface Props {
  fill: boolean,
}

export const FilterElementWrapper = styled.div<Props>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  fill: ${(props) => (props.fill ? '#f74705' : '#fff')};

  &:hover {
    cursor: pointer;
    fill: #f74705;
  }
`;
