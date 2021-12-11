import playOnClick from 'src/utils/playOnClick';
import { useAppDispatch } from 'src/hooks/hook';
import { setFilter } from 'src/stores/reducers/filterReducer';
import { IValue } from 'src/types/globals';
import { FilterElementWrapper } from './SvgElement.style';

type IState = boolean;

const SvgElement = (Component: JSX.Element, size: number, value: IValue, state: IState) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    playOnClick(state);
    dispatch(setFilter(value));
  };
  return (
    <FilterElementWrapper Fill={!state} Size={size} onClick={() => clickHandler()}>
      {Component}
    </FilterElementWrapper>
  );
};

export default SvgElement;
