import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 64px;
  padding: 12px 24px;
  display: flex;
  background-color: ${props => props.theme.bcg};

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  > nav {
    margin: 0 auto;
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: ${props => props.theme.main};
  background-color: ${props => props.theme.lightBcg};
  font-weight: 500;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.hover};
  }
  &:hover {
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.hover};
  }
`;

// export const Navigation = styled.nav`
//   justify-content: center;
//   align-items: center;
// `;
