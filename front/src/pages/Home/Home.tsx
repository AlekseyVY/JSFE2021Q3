import Snowfall from 'react-snowfall';
import { AnimationWrapper, Container } from './Home.style';
import LottiePlayer from '../../components/LottiePlayer/LottiePlayer';

const Home = () => (
  <Container>
    <Snowfall />
    <AnimationWrapper>
      <LottiePlayer data="./lotties/home_tree.json" name="christmas" />
    </AnimationWrapper>
  </Container>
);

export default Home;
