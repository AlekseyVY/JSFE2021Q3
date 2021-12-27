import styled, { keyframes } from 'styled-components';

const Reveal = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`;

export const Container = styled.div`
  width: 760px;
  height: 500px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  border-radius: 10px;
  backdrop-filter: blur(3px) saturate(180%);
  background-color: rgba(239,242,247,0.75);
  animation: ${Reveal};
  animation-duration: 2s;
`;

export const LightsButton = styled.div`
  width: 100px;
  height: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: darkblue;
  border-radius: 10px;
  border: 1px solid #fff;
  &:hover {
    cursor: pointer;
    color: crimson;
    border-color: crimson;
  }
`;
