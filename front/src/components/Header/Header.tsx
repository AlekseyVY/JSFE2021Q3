import { Link } from 'react-router-dom';
import { Container } from './Header.style';

const Header = () => (
  <Container>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Toys">Toys</Link>
      <Link to="/Tree">Tree</Link>
    </nav>
  </Container>
);

export default Header;
