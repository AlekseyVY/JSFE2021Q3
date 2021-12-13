import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  outline: none;
  padding-left: 16px; 
  border-color: #0c308a;
  color: #f74705;
  tab-index: 1;
  &::placeholder {
    color: #0c308a;
  }
`;

export const CrossWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 11px;
  stroke: #0c308a;
  &:hover {
    cursor: pointer;
    stroke: #f74705;
  }
`;
