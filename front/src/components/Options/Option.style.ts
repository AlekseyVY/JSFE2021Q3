import styled from 'styled-components';

interface IProps {
  url: string;
}

interface IToy {
  x :number;
  y: number;
  color?: string;
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
  z-index: 700;
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
  margin: auto;
  width: 600px;
  height: 600px;
  position: relative;
`;

export const TreeStyle = styled.img`
  width: 600px;
  height: 600px;
`;

export const ToysContainer = styled.div`
  width: 200px;
  height: 410px;
  position: absolute;
  padding: 10px;
  top: 3%;
  right: 3%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: flex-start;
  border-radius: 10px;
  backdrop-filter: blur(3px) saturate(180%);
  background-color: rgba(239,242,247,0.75);
`;

export const DragContainer = styled.map`
`;

export const DragAreaContainer = styled.area`
`;

export const TreeToyWrapper = styled.div<IToy>`
  position: absolute;
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
  width: 50px;
  height: 50px;
  z-index: 500;
`;

export const ToyImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const LightsStyle = styled.div<IToy>`
  position: absolute;
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  pointer-events: none;
`;
