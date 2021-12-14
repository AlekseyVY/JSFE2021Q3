import { AnimationWrapper, Container } from './Home.style';
import LottiePlayer from '../../components/LottiePlayer/LottiePlayer';

const Home = () => (
  <Container>
    <AnimationWrapper>
      <LottiePlayer data="./lotties/home_tree.json" name="christmasTree" />
    </AnimationWrapper>
  </Container>
);

export default Home;
