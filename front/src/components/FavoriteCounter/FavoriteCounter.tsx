import { Container, FavoriteNumber, FavoriteWrapper } from './FavoriteCounter.style';
import { ReactComponent as Favorite } from '../../assets/fav.svg';
import { IProps } from '../ToyCard/ToyCard.d';

const FavoriteCounter = (data: IProps[]) => {
  const calculated = data.reduce((acc, val) => (val.favorite ? acc + 1 : acc), 0);
  return (
    <Container>
      <FavoriteWrapper>
        <Favorite />
      </FavoriteWrapper>
      <FavoriteNumber>
        {calculated}
      </FavoriteNumber>
    </Container>
  );
};

export default FavoriteCounter;
