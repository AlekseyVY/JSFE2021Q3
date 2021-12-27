import { Container, Image, Value } from './TreeToy.style';
import { IProps } from '../ToyCard/ToyCard.d';

const TreeToy = (ele: IProps) => (
  <Container>
    <Image
      id={ele.num}
      draggable={!(Number(ele.amount) <= 0)}
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ name: ele.num, id: String(Math.random() * 10000), tree: false }));
      }}
      src={`./assets/toys/${ele.num}.webp`}
      alt={'toy'}
    />
    <Value>{ele.amount}</Value>
  </Container>
);

export default TreeToy;
