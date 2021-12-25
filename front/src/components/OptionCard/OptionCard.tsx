import { Container, Selected, Wrapper } from './OptionCard.style';
import { useAppDispatch } from '../../hooks/hook';
import { setBg } from '../../stores/reducers/optionsReducer';

const OptionCard = ({ url, num, state }: { url: string, num: number, state: boolean }) => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper onClick={() => dispatch(setBg(num))}>
      <Container url={url} />
      {state && <Selected />}
    </Wrapper>
  );
};

export default OptionCard;
