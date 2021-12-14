import LottiePlayer from '../../components/LottiePlayer/LottiePlayer';
import { AnimationWrapper, Container } from './NotFounded.style';

const NotFounded = () => (
  <Container>
    <AnimationWrapper>
      <LottiePlayer data="./lotties/noData.json" name="noData" />
      <h3>Sorry, no data found!</h3>
    </AnimationWrapper>
  </Container>
);

export default NotFounded;
