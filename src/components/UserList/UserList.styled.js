import styled from 'styled-components';

export const UserItem = styled.li`
  position: relative;
  width: 380px;
  height: 460px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 32px;
  margin-bottom: 32px;
`;
