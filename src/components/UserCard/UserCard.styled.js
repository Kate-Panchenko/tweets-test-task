import styled from 'styled-components';

export const StyledLogo = styled.img`
  width: 76px;
  height: 22px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 140px;
`;

export const Banner = styled.img`
  width: 308px;
  height: 168px;
  position: absolute;
  top: 28px;
  left: 36px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  ::before {
    content: '';
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    color: ${props => props.theme.main};
    width: 150px;
    height: 8px;
    position: absolute;
    top: 50%;
    left: 75px;
    transform: translate(-50%, -50%);
  }
  ::after {
    content: '';
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    color: ${props => props.theme.main};
    width: 150px;
    height: 8px;
    position: absolute;
    top: 50%;
    right: -75px;
    transform: translate(-50%, -50%);
  }
`;

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 85.9232px;
  margin: 0 auto;
`;

export const AvatarFrame = styled.div`
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;
  width: 80px;
  height: 80px;
  color: ${props => props.theme.main};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${props => props.theme.main};
  margin-bottom: 26px;
  margin-top: 26px;
`;
