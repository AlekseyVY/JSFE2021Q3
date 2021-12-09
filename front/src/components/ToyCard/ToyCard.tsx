import { IProps } from './ToyCard.d';
import {
  Back, Container, Front, Inner,
} from './ToyCard.style';

const ToyCard = ({
  num, name, count, year, shape, color, size, favorite,
}: IProps) => (
  <Container onClick={() => console.log(name)}>
    <Inner>
      <Front id={num} url={`./assets/toys/${num}.webp`} />
      <Back>
        <h3>{name}</h3>
        <div>
          Количество:
          {count}
        </div>
        <div>
          Год покупки:
          {year}
        </div>
        <div>
          Форма:
          {shape}
        </div>
        <div>
          Цвет:
          {color}
        </div>
        <div>
          Размер:
          {size}
        </div>
        <div>
          Любимый:
          {favorite ? 'ДА' : 'НЕТ'}
        </div>
      </Back>
    </Inner>
  </Container>
);

export default ToyCard;
