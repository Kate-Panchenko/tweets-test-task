import { UserCard } from 'components/UserCard/UserCard';
import { useEffect, useState } from 'react';
import {
  getUsers,
  increaseUserFollowers,
  decreaseUserFollowers,
} from 'services/api';
import { UserItem, List } from './UserList.styled';

const LOCAL_STORAGE_KEY = 'followedUsersId';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [followedUsersId, setFollowedUsersId] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );
  // const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  function followUser(user) {
    setFollowedUsersId([...followedUsersId, user.id]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...followedUsersId, user.id])
    );
    async function increase(user) {
      try {
        const updatedUser = await increaseUserFollowers(user);
        const props = { followers: updatedUser.followers };
        updateUser(updatedUser.id, props);
      } catch (error) {
        console.log(error);
      }
    }
    increase(user);
  }

  function unfollowUser(user) {
    const updatedFollowedUserId = followedUsersId.filter(id => id !== user.id);
    setFollowedUsersId(updatedFollowedUserId);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(updatedFollowedUserId)
    );
    async function decrease(user) {
      try {
        const updatedUser = await decreaseUserFollowers(user);
        const props = { followers: updatedUser.followers };
        updateUser(updatedUser.id, props);
      } catch (error) {
        console.log(error);
      }
    }
    decrease(user);
  }

  function updateUser(id, newProps) {
    setUsers(users => {
      return users.map(user => {
        if (user.id === id) {
          return { ...user, ...newProps };
        } else {
          return user;
        }
      });
    });
  }

  return (
    <>
      <List>
        {users.map(user => (
          <UserItem key={user.id}>
            <UserCard
              user={user}
              follow={followUser}
              unfollow={unfollowUser}
              followedUsers={followedUsersId}
            />
          </UserItem>
        ))}
      </List>
    </>
  );
};
