import { NavLink } from 'react-router-dom';
import Music from '../Music/Music';
import {
  Container, ContentWrapper, LinkWrapper, MenuButtonsWrapper, NavWrapper, SnowButton,
} from './Header.style';
import { useAppDispatch } from '../../hooks/hook';
import { setSnow } from '../../stores/reducers/optionsReducer';

const Header = () => {
  const dispatch = useAppDispatch();
  return (
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
        <MenuButtonsWrapper>
          {Music('./assets/music/01.mp3')}
          <SnowButton role={'button'} onClick={() => dispatch(setSnow())}>Snow</SnowButton>
        </MenuButtonsWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
