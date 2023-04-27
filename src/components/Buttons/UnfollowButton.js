import { UnfollowStyledButton } from './Buttons.styled';

export const UnfollowButton = ({ onClick, user }) => {
  return (
    <UnfollowStyledButton type="button" onClick={() => onClick(user)}>
      Following
    </UnfollowStyledButton>
  );
};
