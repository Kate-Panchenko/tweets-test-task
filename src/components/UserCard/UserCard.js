import Logo from '../../images/Logo.png';
import BcgPicture from '../../images/bcg-picture.png';
import {
  StyledLogo,
  Banner,
  UserAvatar,
  AvatarFrame,
  AvatarWrapper,
  InfoWrapper,
} from './UserCard.styled';

export const UserCard = ({ user }) => {
  const { followers, tweets, id, avatar } = user;
  return (
    <>
      <StyledLogo src={Logo} alt="Logo" />
      <Banner src={BcgPicture} alt="Background picture" />
      <AvatarWrapper>
        <UserAvatar src={avatar} alt="avatar" />
        <AvatarFrame></AvatarFrame>
      </AvatarWrapper>
      <InfoWrapper>
        <p>{tweets} Tweets</p>
        <p> {followers.toLocaleString('en-US')} Followers</p>
      </InfoWrapper>
      <button>Follow</button>
    </>
  );
};
