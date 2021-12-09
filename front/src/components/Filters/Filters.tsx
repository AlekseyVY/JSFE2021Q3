import {
  ColorSelect,
  Container, FilterElementWrapper, FilterWrapper, InnerFilterWrapper, SizesWrapper,
} from './Filters.style';
import { ReactComponent as Ball } from '../../assets/svg/ball.svg';
import { ReactComponent as Cone } from '../../assets/svg/cone.svg';
import { ReactComponent as Bell } from '../../assets/svg/bell.svg';
import { ReactComponent as Snowflake } from '../../assets/svg/snowflake.svg';
import { ReactComponent as Toy } from '../../assets/svg/toy.svg';
import { ReactComponent as BallSmall } from '../../assets/sizes/ball_small.svg';
import { ReactComponent as BallMedium } from '../../assets/sizes/ball_medium.svg';
import { ReactComponent as BallLarge } from '../../assets/sizes/ball_large.svg';

const Filters = () => {
  console.log('aaa');
  return (
    <Container>
      <FilterWrapper>
        <h3>Фильтры по значению:</h3>
        <InnerFilterWrapper>
          Форма:
          <FilterElementWrapper>
            <Ball />
          </FilterElementWrapper>
          <FilterElementWrapper>
            <Bell />
          </FilterElementWrapper>
          <FilterElementWrapper>
            <Cone />
          </FilterElementWrapper>
          <FilterElementWrapper>
            <Snowflake />
          </FilterElementWrapper>
          <FilterElementWrapper>
            <Toy />
          </FilterElementWrapper>
        </InnerFilterWrapper>
        <InnerFilterWrapper>
          Цвет:
          <ColorSelect color="white" />
          <ColorSelect color="yellow" />
          <ColorSelect color="red" />
          <ColorSelect color="blue" />
          <ColorSelect color="green" />
        </InnerFilterWrapper>
        <InnerFilterWrapper>
          Размер:
          <SizesWrapper>
            <BallLarge />
          </SizesWrapper>
          <SizesWrapper>
            <BallMedium />
          </SizesWrapper>
          <SizesWrapper>
            <BallSmall />
          </SizesWrapper>
        </InnerFilterWrapper>
        <InnerFilterWrapper>
          Только любимые:
          <ColorSelect color="white" />
        </InnerFilterWrapper>
      </FilterWrapper>

      <div>
        Фильтры по диапазону:
        <div>
          Количество экземпляров:
          <div>
            <div>1</div>
            <input type="range" />
            <div>2</div>
          </div>
        </div>
        <div>
          Год приобретения:
          <div>
            <div>1</div>
            <input type="range" />
            <div>2</div>
          </div>
        </div>
      </div>

      <div>
        Сортировка:
        <div>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div>Сброс фильтров</div>
      </div>
    </Container>
  );
};

export default Filters;
