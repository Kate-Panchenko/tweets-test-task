import { Header, StyledNavLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/tweets">Tweets</StyledNavLink>
      </nav>
    </Header>
  );
};
