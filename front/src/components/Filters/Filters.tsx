import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/hook';
import { IFilters } from '../../types/globals';
import { clearFilter } from '../../stores/reducers/filterReducer';
import storageEntity from '../../utils/storageEntity';
import {
  ButtonsWrapper,
  ClearButton,
  Container,
  FilterWrapper, InnerFilterWrapper, LabelWrapper,
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
import CustomRange from '../CustomRange/CustomRange';
import CustomSearch from '../CustomSearch/CustomSearch';
import FavoriteCounter from '../FavoriteCounter/FavoriteCounter';

const Filters = () => {
  const [filters, setFilters] = useState<IFilters>();
  const [selected, setSelected] = useState<string>();
  const value = useAppSelector((state) => state.filters);
  const toys = useAppSelector((state) => state.toys);
  const dispatch = useAppDispatch();
  const customSelectState = (): string => {
    if (filters) {
      const tmp = Object.entries(filters.sort).filter((ele) => {
        if (ele[1]) {
          return ele[0];
        }
        return false;
      })[0];
      return tmp[0];
    }
    return '';
  };
  const stateHelper = (data: string | undefined): string => {
    if (data === 'alphabet') return 'Alphabet sort';
    if (data === 'alphabetReverse') return 'Alphabet sort (reverse)';
    if (data === 'amountIncrease') return 'By amount (increase)';
    if (data === 'amountDecrease') return 'By amount (increase)';
    return '';
  };
  const clearHandler = () => {
    dispatch(clearFilter());
  };
  useEffect(() => {
    setFilters(value);
    setSelected(customSelectState());
  }, [value, selected]);
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
        <InnerFilterWrapper>
          {FavoriteCounter(toys)}
        </InnerFilterWrapper>
      </FilterWrapper>
      <FilterWrapper>
        <h3>Filter by range:</h3>
        <div>
          Amount:
          {CustomRange(
            0,
            12,
            { category: 'range', subCategory: 'amount' },
            'amount',
          )}
        </div>
        <div>
          Year:
          {CustomRange(
            1940,
            2020,
            { category: 'range', subCategory: 'year' },
            'year',
          )}
        </div>
      </FilterWrapper>
      <FilterWrapper>
        <h3>Sort:</h3>
        <div>
          <CustomSelect state={stateHelper(selected)} />
        </div>
        <h3>Search:</h3>
        <CustomSearch />
        <ButtonsWrapper>
          <ClearButton onClick={() => clearHandler()}>Clear Filters</ClearButton>
          <ClearButton onClick={() => {
            storageEntity('clear');
            // Cringe
            window.location.reload();
          }}
          >
            Clear Local Storage
          </ClearButton>
        </ButtonsWrapper>
      </FilterWrapper>
    </Container>
  );
};

export default Filters;
