import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FollowStyledButton = styled.button`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  padding: 14px 52px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: ${props => props.theme.black};
  border: none;
  background-color: ${props => props.theme.main};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;

export const UnfollowStyledButton = styled.button`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  padding: 14px 36px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: ${props => props.theme.black};
  border: none;
  background-color: ${props => props.theme.hover};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.main};
  }
`;

export const LoadMoreStyledButton = styled.button`
  cursor: pointer;
  display: block;
  margin: 0 auto 36px auto;
  padding: 14px 36px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: ${props => props.theme.black};
  border: none;
  background-color: ${props => props.theme.main};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;

export const BackButton = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 180px;
  margin-top: 24px;
  padding: 14px 32px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: ${props => props.theme.black};
  border: none;
  background-color: ${props => props.theme.main};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;
