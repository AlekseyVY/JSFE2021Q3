import { Link } from 'react-router-dom';
import {
  Container, ContentWrapper, LinkWrapper, NavWrapper,
} from './Header.style';

const Header = () => (
  <Container>
    <ContentWrapper>
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
    </ContentWrapper>
  </Container>
);

export default Header;
