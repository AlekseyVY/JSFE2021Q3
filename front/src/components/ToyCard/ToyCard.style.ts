import styled from 'styled-components';
import { Props } from './ToyCard.d';

export const Container = styled.div`
  background-color: transparent;
  width: 200px;
  height: 200px;
  perspective: 1000px;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  &:hover {
    cursor: pointer;
    transform: rotateY(180deg);
  }
`;

export const Front = styled.div<Props>`
  position: relative;
  pointer-events: none;
  background-color: #0c308a;
  border-radius: 10px;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: rgb(0 0 0 / 50%) 0 0 20px 2px;
    transition: all 0.5s ease-in-out;
    color: #f74705;
  }
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: #0c308a;
  color: #fff;
  transform: rotateY(180deg);
  pointer-events: none;
`;

export const FavoriteWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 50px;
  height: 50px;
`;
