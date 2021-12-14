import LottiePlayer from '../../components/LottiePlayer/LottiePlayer';
import { AnimationWrapper, Container } from './NotFound.style';

const NotFound = () => (
  <Container>
    <AnimationWrapper>
      <LottiePlayer data="./lotties/not.json" name="404" />
    </AnimationWrapper>
  </Container>
);

export default NotFound;
