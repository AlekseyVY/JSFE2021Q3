import styled, { keyframes } from 'styled-components';

const Reveal = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1;}
`;

export const Container = styled.div`
  width: 500px;
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

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-evenly;
  height: 70px;
`;

export const LightsButton = styled.div`
  width: 90px;
  height: 25px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0c308a;
  border: 1px solid #0c308a;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #f74705;
    border-color: #f74705;
    transition: 0.5s ease-in-out;
  }
`;
