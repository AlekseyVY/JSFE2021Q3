import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  border: 1px solid #0c308a;
  border-radius: 4px;
  outline: none;
  letter-spacing: -0.25px;
  text-align: left;
  color: #0c308a;
  padding-left: 20px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const OptionContainer = styled.div`
  width: 100%;
  height: 150px;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 100;
  background-color: #fff;
  border-radius: 8px;
  -webkit-box-shadow: 0 10px 25px 1px rgba(0,0,0,0.35);
  box-shadow: 0 10px 25px 1px rgba(0,0,0,0.35);
`;

export const Item = styled.div`
  margin: 10px;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-align: left;
  color: #0c308a;
  &:hover {
    cursor: pointer;
    color: #f74705;
  }
`;

export const Separator = styled.div`
  width: 100%;
  border-top: 1px solid #0c308a;
`;

export const Arrow = styled.svg`
    position: absolute;
  bottom: 15px;
  right: 15px;
`;
