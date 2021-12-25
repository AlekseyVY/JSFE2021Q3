import styled from 'styled-components';

interface IProps {
  url: string;
}

export const Container = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: 2s ease-in-out;
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

export const BackgroundStyle = styled.div<IProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -100;
  background-image: ${(props) => `url("${props.url}")`};
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
`;

export const TreeContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -80;
`;

export const TreeStyle = styled.img`
  width: 600px;
  height: 600px;
`;
