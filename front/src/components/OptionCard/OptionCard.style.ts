import styled from 'styled-components';

interface IProps {
  url: string
}

export const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;

export const Container = styled.div<IProps>`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url("${props.url}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const Selected = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f74705;
  opacity: 0.3;
  border-radius: 10px;
`;
