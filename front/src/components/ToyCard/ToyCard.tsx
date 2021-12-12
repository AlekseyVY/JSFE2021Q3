import { useAppDispatch } from 'src/hooks/hook';
import { setFavorite } from 'src/stores/reducers/toysReducer';
import { IProps } from './ToyCard.d';
import {
  Back, Container, FavoriteWrapper, Front, Inner,
} from './ToyCard.style';
import { ReactComponent as Favorite } from '../../assets/fav.svg';

const ToyCard = ({
  num, name, count, year, form, color, size, favorite,
}: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <Container onClick={() => dispatch(setFavorite({ num }))}>
      <Inner>
        <Front id={num} url={`./assets/toys/${num}.webp`}>
          {favorite ? <FavoriteWrapper><Favorite /></FavoriteWrapper> : ''}
        </Front>
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
            {form}
          </div>
          <div>
            Color:
            {color}
          </div>
          <div>
            Size:
            {size}
          </div>
        </Back>
      </Inner>
    </Container>
  );
};

export default ToyCard;
