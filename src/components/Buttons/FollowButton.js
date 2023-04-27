import { FollowStyledButton } from './Buttons.styled';

export const FollowButton = ({ onClick, user }) => {
  return (
    <FollowStyledButton type="button" onClick={() => onClick(user)}>
      Follow
    </FollowStyledButton>
  );
};
