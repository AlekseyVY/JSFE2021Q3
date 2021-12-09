import styled from 'styled-components';

interface Props {
  color: string;
}

export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  height: 300px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  -webkit-backdrop-filter: blur(3px) saturate(180%);
  backdrop-filter: blur(3px) saturate(180%);
  background-color: rgba(239,242,247,0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: #0c308a;
`;

export const FilterWrapper = styled.div`
  width: 400px;
  height: 300px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const InnerFilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterElementWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  fill: #fff;

  &:hover {
    cursor: pointer;
    fill: #f74705;
  }
`;

export const ColorSelect = styled.div<Props>`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin: 0 5px;
  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

export const SizesWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #fff;

  &:hover {
    cursor: pointer;
    fill: #f74705;
  }
`;

export const RangeWrapper = styled.div`
  margin: 10px 0 20px 0;
`;

export const ClearButton = styled.div`
  width: 70px;
  height: 30px;
  margin: auto 10px 70px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0c308a;
  color: #fff;
  border-radius: 5px;
  transition: 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    background-color: #f74705;
    color: #0c308a;
    transition: 0.5s ease-in-out;
  }

  &:active {
  transform: scale(1);
  transition: 0.5s ease-in-out;
  }
`;

export const LabelWrapper = styled.span`
  margin: 0 10px 0 0;
`;
