import { useAppDispatch } from 'src/hooks/hook';
import { setFavorite } from 'src/stores/reducers/toysReducer';
import createModal from 'src/utils/createModal';
import { IProps } from './ToyCard.d';
import {
  Back, Container, FavoriteWrapper, Front, Inner, SentienceWrapper, WordWrapper,
} from './ToyCard.style';
import { ReactComponent as Favorite } from '../../assets/fav.svg';

const ToyCard = ({
  num, name, amount, year, form, color, size, favorite,
}: IProps, max: number) => {
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    if (max < 20) {
      dispatch(setFavorite({ num }));
    } else if (max === 20 && favorite) {
      dispatch(setFavorite({ num }));
    } else {
      createModal('Reached maximum favorite\'s capacity of 20.', 'errorModal');
    }
  };
  return (
    <Container onClick={() => clickHandler()}>
      <Inner>
        <Front id={num} url={`./assets/toys/${num}.webp`}>
          {favorite ? <FavoriteWrapper><Favorite /></FavoriteWrapper> : ''}
        </Front>
        <Back>
          <h3>{name}</h3>
          <SentienceWrapper>
            <WordWrapper>
              Amount:
            </WordWrapper>
            {amount}
          </SentienceWrapper>
          <SentienceWrapper>
            <WordWrapper>
              Year:
            </WordWrapper>
            {year}
          </SentienceWrapper>
          <SentienceWrapper>
            <WordWrapper>
              Shape:
            </WordWrapper>
            {form}
          </SentienceWrapper>
          <SentienceWrapper>
            <WordWrapper>
              Color:
            </WordWrapper>
            {color}
          </SentienceWrapper>
          <SentienceWrapper>
            <WordWrapper>
              Size:
            </WordWrapper>
            {size}
          </SentienceWrapper>
        </Back>
      </Inner>
    </Container>
  );
};

export default ToyCard;
