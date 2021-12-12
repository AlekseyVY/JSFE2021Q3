import LottiePlayer from 'src/components/LottiePlayer/LottiePlayer';
import { AnimationWrapper, Container } from './Tree.style';

const Tree = () => (
  <Container>
    <AnimationWrapper>
      <LottiePlayer data="./lotties/construction.json" name="construction" />
    </AnimationWrapper>
  </Container>
);

export default Tree;
