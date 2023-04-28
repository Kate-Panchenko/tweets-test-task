import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SiReact } from 'react-icons/si';

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 32px;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.17;
  color: ${props => props.theme.lightBcg};
  margin-top: 72px;
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
  color: ${props => props.theme.bcg};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${props => props.theme.hover};
  }
`;

export const ReactIcon = styled(SiReact)`
  display: block;
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  animation: rotate 5s infinite linear;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
