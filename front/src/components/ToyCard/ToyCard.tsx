import { IProps } from './ToyCard.d';
import { Container } from './ToyCard.style';

const ToyCard = ({
  num, name, count, year, shape, color, size, favorite,
}: IProps) => {
  console.log(num);
  return (
    <Container id={num}>
      <h1>{ name }</h1>
      <div>
        Количество:
        { count }
      </div>
      <div>
        Год покупки:
        { year }
      </div>
      <div>
        Форма:
        { shape }
      </div>
      <div>
        Цвет:
        { color }
      </div>
      <div>
        Размер:
        { size }
      </div>
      <div>
        Любимый:
        { favorite ? 'ДА' : 'НЕТ' }
      </div>
    </Container>
  );
};

export default ToyCard;
