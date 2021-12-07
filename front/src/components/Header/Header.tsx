import { Link } from 'react-router-dom';
import { Container, LinkWrapper, NavWrapper } from './Header.style';

const Header = () => (
  <Container>
    <NavWrapper>
      <LinkWrapper>
        <Link to="/">Home</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/Toys">Toys</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/Tree">Christmas tree</Link>
      </LinkWrapper>
    </NavWrapper>
  </Container>
);

export default Header;
