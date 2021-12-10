import styled from 'styled-components';

interface Props {
  color: string;
}

export const ColorSelect = styled.div<Props>`
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 5px;
  margin: 0 5px;
  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

export const CheckedWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 3px;
  left: 2px;
`;
