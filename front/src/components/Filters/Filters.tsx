import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'src/hooks/hook';
import { IFilters } from 'src/types/globals';
import {
  ClearButton,
  Container,
  FilterWrapper, InnerFilterWrapper, LabelWrapper, RangeWrapper,
} from './Filters.style';
import { ReactComponent as Ball } from '../../assets/svg/ball.svg';
import { ReactComponent as Cone } from '../../assets/svg/cone.svg';
import { ReactComponent as Bell } from '../../assets/svg/bell.svg';
import { ReactComponent as Snowflake } from '../../assets/svg/snowflake.svg';
import { ReactComponent as Toy } from '../../assets/svg/toy.svg';
import { ReactComponent as BallSmall } from '../../assets/sizes/ball_small.svg';
import { ReactComponent as BallMedium } from '../../assets/sizes/ball_medium.svg';
import { ReactComponent as BallLarge } from '../../assets/sizes/ball_large.svg';
import CustomSelect from '../CustomSelect/CustomSelect';
import SvgElement from '../SvgElement/SvgElement';
import CustomCheck from '../CustomCheck/CustomCheck';

const Filters = () => {
  const [filters, setFilters] = useState<IFilters>();
  const value = useAppSelector((state) => state.filters);
  useEffect(() => {
    setFilters(value);
  }, [value]);
  console.log(filters);
  const { createSliderWithTooltip } = Slider;
  const Range = createSliderWithTooltip(Slider.Range);
  return (
    <Container>
      <FilterWrapper>
        <h3>Filter by value:</h3>
        <InnerFilterWrapper>
          <LabelWrapper>Form:</LabelWrapper>
          {SvgElement(<Ball />, 30, { category: 'value', subCategory: 'form', name: 'ball' }, !filters?.value.form.ball)}
          {SvgElement(<Bell />, 30, { category: 'value', subCategory: 'form', name: 'bell' }, !filters?.value.form.bell)}
          {SvgElement(<Cone />, 30, { category: 'value', subCategory: 'form', name: 'cone' }, !filters?.value.form.cone)}
          {SvgElement(<Snowflake />, 30, { category: 'value', subCategory: 'form', name: 'star' }, !filters?.value.form.star)}
          {SvgElement(<Toy />, 30, { category: 'value', subCategory: 'form', name: 'toy' }, !filters?.value.form.toy)}
        </InnerFilterWrapper>
        <InnerFilterWrapper>
          <LabelWrapper>Color:</LabelWrapper>
          {CustomCheck('white', { category: 'value', subCategory: 'color', name: 'white' }, !filters?.value.color.white)}
          {CustomCheck('yellow', { category: 'value', subCategory: 'color', name: 'yellow' }, !filters?.value.color.yellow)}
          {CustomCheck('red', { category: 'value', subCategory: 'color', name: 'red' }, !filters?.value.color.red)}
          {CustomCheck('blue', { category: 'value', subCategory: 'color', name: 'blue' }, !filters?.value.color.blue)}
          {CustomCheck('green', { category: 'value', subCategory: 'color', name: 'green' }, !filters?.value.color.green)}
        </InnerFilterWrapper>
        <InnerFilterWrapper>
          <LabelWrapper>Size:</LabelWrapper>
          {SvgElement(<BallLarge />, 50, { category: 'value', subCategory: 'size', name: 'large' }, !filters?.value.size.large)}
          {SvgElement(<BallMedium />, 50, { category: 'value', subCategory: 'size', name: 'medium' }, !filters?.value.size.medium)}
          {SvgElement(<BallSmall />, 50, { category: 'value', subCategory: 'size', name: 'small' }, !filters?.value.size.small)}
        </InnerFilterWrapper>
        <InnerFilterWrapper>
          <LabelWrapper>Favorite:</LabelWrapper>
          {CustomCheck('white', { category: 'value', subCategory: 'favorite' }, !filters?.value.favorite)}
        </InnerFilterWrapper>
      </FilterWrapper>

      <FilterWrapper>
        <h3>Filter by range:</h3>
        <div>
          Amount:
          <RangeWrapper>
            <Range min={0} max={12} defaultValue={[0, 12]} />
          </RangeWrapper>
        </div>
        <div>
          Year:
          <RangeWrapper>
            <Range min={1940} max={2020} defaultValue={[1940, 2020]} />
          </RangeWrapper>
        </div>
      </FilterWrapper>

      <FilterWrapper>
        <h3>Sort:</h3>
        <div>
          <CustomSelect />
        </div>
        <ClearButton>Clear</ClearButton>
      </FilterWrapper>
    </Container>
  );
};

export default Filters;
