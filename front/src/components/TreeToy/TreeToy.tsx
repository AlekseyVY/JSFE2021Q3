import { useState } from 'react';
import { Container, Image, Value } from './TreeToy.style';
import { IProps } from '../ToyCard/ToyCard.d';

const TreeToy = (ele: IProps) => {
  const [state, setState] = useState<number>(Number(ele.amount));
  console.log(ele);
  return (
    <Container>
      <Image
        draggable={!(state <= 0)}
        onDragStart={(e) => {
          e.dataTransfer.setData('text/plain', JSON.stringify({ name: ele.num, id: String(Math.random() * 10000) }));
          setState(state - 1);
        }}
        src={`./assets/toys/${ele.num}.webp`}
        alt={'toy'}
      />
      <Value>{state}</Value>
    </Container>
  );
};

export default TreeToy;
