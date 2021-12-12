import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  height: 100%;
`;

export const AnimationWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  z-index: -10;
`;
