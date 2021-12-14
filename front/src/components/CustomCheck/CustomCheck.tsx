import { useAppDispatch } from '../../hooks/hook';
import { IValue } from '../../types/globals';
import { setFilter } from '../../stores/reducers/filterReducer';
import playOnClick from '../../utils/playOnClick';
import { CheckedWrapper, ColorSelect } from './CustomCheck.style';
import { ReactComponent as Checked } from '../../assets/check.svg';

const CustomCheck = (color: string, value: IValue, state: boolean) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    playOnClick(state);
    dispatch(setFilter(value));
  };
  return (
    <ColorSelect onClick={() => clickHandler()} color={color}>
      {!state && <CheckedWrapper><Checked /></CheckedWrapper>}
    </ColorSelect>
  );
};

export default CustomCheck;
