import { Container, Selected, Wrapper } from './OptionCard.style';
import { useAppDispatch } from '../../hooks/hook';
import { setBg, setTree } from '../../stores/reducers/optionsReducer';

const OptionCard = ({
  url, num, state, bg,
}: { url: string, num: number, state: boolean, bg: boolean }) => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper onClick={bg ? () => dispatch(setBg(num)) : () => dispatch(setTree(num))}>
      <Container url={url} />
      {state && <Selected />}
    </Wrapper>
  );
};

export default OptionCard;
