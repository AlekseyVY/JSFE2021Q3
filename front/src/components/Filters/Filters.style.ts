import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1440px;
  width: 100%;
  height: 300px;
  margin: 30px auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  -webkit-backdrop-filter: blur(3px) saturate(180%);
  backdrop-filter: blur(3px) saturate(180%);
  background-color: rgba(239,242,247,0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: #0c308a;
  z-index: 10;
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

export const ClearButton = styled.div`
  padding: 10px;
  margin: 10px;
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

export const InnerText = styled.span`
 margin: 0 3px;
`;

export const LabelWrapper = styled.span`
  margin: 0 10px 0 0;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
