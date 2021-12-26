import { NavLink } from 'react-router-dom';
import { AnimationWrapper, Container, PlayGame } from './Home.style';
import LottiePlayer from '../../components/LottiePlayer/LottiePlayer';

const Home = () => (
  <Container>
    <AnimationWrapper>
      <LottiePlayer data="./lotties/home_tree.json" name="christmasTree" />
    </AnimationWrapper>
    <NavLink
      to="/Tree"
      style={
        ({ isActive }) => (
          isActive
            ? {
              textDecoration: 'none',
              color: '#f74705',
            }
            : {}
        )
      }
    >
      <PlayGame>Play game</PlayGame>
    </NavLink>

  </Container>
);

export default Home;
