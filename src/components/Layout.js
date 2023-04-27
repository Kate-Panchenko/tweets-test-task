import styled from 'styled-components';
export const Layout = styled.main`
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1220px;
  }
`;

export const theme = {
  bcg: '#471CA9',
  lightBcg: '#5736A3',
  black: '#373737',
  hover: '#5CD3A8',
  main: '#EBD8FF',
};
