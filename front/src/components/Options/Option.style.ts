import styled from 'styled-components';

export const Container = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: 5s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: rotate(900deg);
    transition: 5s ease-in-out;
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
