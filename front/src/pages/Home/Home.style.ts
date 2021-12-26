import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const AnimationWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  z-index: -10;
`;

export const PlayGame = styled.div`
  width: 100px;
  height: 50px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0c308a;
  border: 1px solid #0c308a;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  margin-right: 200px;
  &:hover {
    cursor: pointer;
    color: #f74705;
    border-color: #f74705;
    transition: 0.5s ease-in-out;
  }
`;
