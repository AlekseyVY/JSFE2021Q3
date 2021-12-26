import { Container, Image, Value } from './TreeToy.style';
import { IProps } from '../ToyCard/ToyCard.d';

const TreeToy = (ele: IProps) => (
  <Container>
    <Image src={`./assets/toys/${ele.num}.webp`} alt={'toy'} />
    <Value>{ele.amount}</Value>
  </Container>
);

export default TreeToy;
