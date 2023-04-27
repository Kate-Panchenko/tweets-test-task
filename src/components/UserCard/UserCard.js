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
import { FollowButton } from 'components/Buttons/FollowButton';
import { UnfollowButton } from 'components/Buttons/UnfollowButton';

export const UserCard = ({ user, follow, unfollow, followedUsers }) => {
  const { followers, tweets, avatar, id } = user;
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
      {followedUsers.includes(id) ? (
        <UnfollowButton type="button" onClick={unfollow} user={user} />
      ) : (
        <FollowButton type="button" onClick={follow} user={user} />
      )}
    </>
  );
};
