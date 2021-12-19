import { NavLink } from 'react-router-dom';
import Music from '../Music/Music';
import {
  Container, ContentWrapper, LinkWrapper, NavWrapper,
} from './Header.style';

const Header = () => (
  <Container>
    <ContentWrapper>
      <NavWrapper>
        <LinkWrapper>
          <NavLink
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
            to="/"
          >
            Home
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
          <NavLink
            to="/Toys"
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
            Toys
          </NavLink>
        </LinkWrapper>
        <LinkWrapper>
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
            Christmas tree
          </NavLink>
        </LinkWrapper>
      </NavWrapper>
      {Music('./assets/music/01.mp3')}
    </ContentWrapper>
  </Container>
);

export default Header;
