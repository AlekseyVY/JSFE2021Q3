import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
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
  const { createSliderWithTooltip } = Slider;
  const Range = createSliderWithTooltip(Slider.Range);
  return (
    <Container>
      <FilterWrapper>
        <h3>Filter by value:</h3>
        <InnerFilterWrapper>
          <LabelWrapper>Form:</LabelWrapper>
          {SvgElement(<Ball />, 30)}
          {SvgElement(<Bell />, 30)}
          {SvgElement(<Cone />, 30)}
          {SvgElement(<Snowflake />, 30)}
          {SvgElement(<Toy />, 30)}
        </InnerFilterWrapper>
        <InnerFilterWrapper>
          <LabelWrapper>Color:</LabelWrapper>
          {CustomCheck('white')}
          {CustomCheck('yellow')}
          {CustomCheck('red')}
          {CustomCheck('blue')}
          {CustomCheck('green')}
        </InnerFilterWrapper>
        <InnerFilterWrapper>
          <LabelWrapper>Size:</LabelWrapper>
          {SvgElement(<BallLarge />, 50)}
          {SvgElement(<BallMedium />, 50)}
          {SvgElement(<BallSmall />, 50)}
        </InnerFilterWrapper>
        <InnerFilterWrapper>
          <LabelWrapper>Favorite:</LabelWrapper>
          {CustomCheck('white')}
        </InnerFilterWrapper>
      </FilterWrapper>

      <FilterWrapper>
        <h3>Filter by range:</h3>
        <div>
          Amount:
          <RangeWrapper>
            <Range min={0} max={12} />
          </RangeWrapper>
        </div>
        <div>
          Year:
          <RangeWrapper>
            <Range min={1940} max={2020} />
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
