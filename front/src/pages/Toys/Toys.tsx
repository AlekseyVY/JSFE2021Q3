import Filters from 'src/components/Filters/Filters';
import ToyCard from 'src/components/ToyCard/ToyCard';
import { useAppSelector } from '../../hooks/hook';
import { Container } from './Toys.style';

const Toys = () => {
  const value = useAppSelector((state) => state.toys);
  return (
    <Container>
      <Filters />
      {value.map((ele) => (
        <ToyCard {...ele} />
      ))}
    </Container>
  );
};

export default Toys;
