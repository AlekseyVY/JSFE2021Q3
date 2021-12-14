import LottiePlayer from '../../components/LottiePlayer/LottiePlayer';
import { AnimationWrapper, Container } from './Tree.style';

const Tree = () => (
  <Container>
    <AnimationWrapper>
      <LottiePlayer data="./lotties/construction.json" name="constructionTree" />
    </AnimationWrapper>
  </Container>
);

export default Tree;
