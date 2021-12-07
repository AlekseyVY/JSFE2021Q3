import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(11px) saturate(180%);
  background-color: rgba(21, 92, 221, 0.53);
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

export const NavWrapper = styled.nav`
  width: 500px;
  height: 100%;
  margin: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LinkWrapper = styled.div`
font-size: 22px;
  &:hover {
    cursor: pointer;
    color: wheat;
  }
`;
