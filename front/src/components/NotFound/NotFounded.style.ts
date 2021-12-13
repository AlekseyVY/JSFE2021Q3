import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  height: 100%;
`;

export const AnimationWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0c308a;
  top: -80px;
  left: -150px;
  width: 300px;
  z-index: -100;
`;
