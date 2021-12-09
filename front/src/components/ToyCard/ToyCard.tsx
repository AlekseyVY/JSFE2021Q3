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
          Amount:
          {count}
        </div>
        <div>
          Year:
          {year}
        </div>
        <div>
          Shape:
          {shape}
        </div>
        <div>
          Color:
          {color}
        </div>
        <div>
          Size:
          {size}
        </div>
        <div>
          Favorite:
          {favorite ? 'ДА' : 'НЕТ'}
        </div>
      </Back>
    </Inner>
  </Container>
);

export default ToyCard;
