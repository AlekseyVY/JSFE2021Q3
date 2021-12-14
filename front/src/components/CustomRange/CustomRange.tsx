import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { setFilter } from '../../stores/reducers/filterReducer';
import { IValue } from '../../types/globals';
import { Container, RangeValue } from './CustomRange.style';

const CustomRange = (
  min: number,
  max: number,
  values: IValue,
  type: string,
) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1);
  const Range = createSliderWithTooltip(Slider.Range);
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.filters.range);
  useEffect(() => {
    setMinValue(value[type].from);
    setMaxValue(value[type].to);
  }, [value]);
  const changeHandler = (e: number[]) => {
    setMinValue(e[0]);
    setMaxValue(e[1]);
    dispatch(setFilter({
      category: values.category,
      subCategory: values.subCategory,
      fromValue: e[0],
      toValue: e[1],
    }));
  };
  return (
    <Container>
      <RangeValue>{minValue}</RangeValue>
      <Range
        onAfterChange={(e) => changeHandler(e)}
        min={min}
        max={max}
        defaultValue={[minValue, maxValue]}
      />
      <RangeValue>{maxValue}</RangeValue>
    </Container>
  );
};

export default CustomRange;
