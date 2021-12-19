import styled from 'styled-components';

export const Container = styled.section`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px) saturate(180%);
  background-color: rgba(239, 242, 247, 0.75);
`;

export const ContentWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavWrapper = styled.nav`
  width: 500px;
  height: 100%;
  margin: 0 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #0c308a;
`;

export const LinkWrapper = styled.div`
font-size: 22px;
  transition: 1s ease-in-out;
  &:hover {
    cursor: pointer;
    color: #f74705;
    transition: 0.3s ease-in-out;
  }
`;
