import { useEffect, useState } from 'react';
import Filters from 'src/components/Filters/Filters';
import ToyCard from 'src/components/ToyCard/ToyCard';
import { IProps } from 'src/components/ToyCard/ToyCard.d';
import { Fade } from 'react-awesome-reveal';
import userSearch from 'src/features/userSearch';
import NotFounded from 'src/components/NotFound/NotFounded';
import { useAppSelector } from '../../hooks/hook';
import { Container } from './Toys.style';

const Toys = () => {
  const [value, setValue] = useState<IProps[]>();
  const toys = useAppSelector((state) => state.filtered);
  const search = useAppSelector((state) => state.search);
  useEffect(() => {
    const calculated = userSearch(toys, search);
    setValue(calculated);
  }, [toys, search]);
  return (
    <Container>
      <Filters />
      <Fade triggerOnce cascade direction="up" duration={1000} damping={0}>
        {value?.length === 0 ? <NotFounded />
          : value && value.map((ele) => (
            <div key={String(Math.random() * 1000)}>
              <ToyCard {...ele} />
            </div>
          ))}
      </Fade>
    </Container>
  );
};

export default Toys;
