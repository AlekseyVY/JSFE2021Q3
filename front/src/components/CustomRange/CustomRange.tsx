import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useAppDispatch } from 'src/hooks/hook';
import { setFilter } from 'src/stores/reducers/filterReducer';
import { IValue } from 'src/types/globals';
import { RangeWrapper } from './CustomRange.style';

const CustomRange = (min: number, max: number, from: number, to: number, values: IValue) => {
  const Range = createSliderWithTooltip(Slider.Range);
  const dispatch = useAppDispatch();
  return (
    <RangeWrapper>
      <Range
        onAfterChange={(e) => dispatch(setFilter({
          category: values.category,
          subCategory: values.subCategory,
          fromValue: e[0],
          toValue: e[1],
        }))}
        min={min}
        max={max}
        defaultValue={[from, to]}
      />
    </RangeWrapper>
  );
};

export default CustomRange;
