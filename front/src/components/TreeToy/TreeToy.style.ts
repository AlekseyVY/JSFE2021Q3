import styled from 'styled-components';

export const Container = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;

export const Value = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 24px;
  color: #0c308a;
`;
