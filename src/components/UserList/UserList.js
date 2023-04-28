import { UserCard } from 'components/UserCard/UserCard';
import { useEffect, useState } from 'react';
import {
  getUsers,
  increaseUserFollowers,
  decreaseUserFollowers,
} from 'services/api';
import { UserItem, List } from './UserList.styled';
import {
  BackButton,
  LoadMoreStyledButton,
} from 'components/Buttons/Buttons.styled';
import { DropDown } from 'components/DropDown/DropDown';
import { HiArrowLeft } from 'react-icons/hi';

const LOCAL_STORAGE_KEY = 'followedUsersId';

const options = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [followedUsersId, setFollowedUsersId] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );
  const [loadUsers, setLoadUsers] = useState(true);
  const [usersLimit, setUsersLimit] = useState(6);
  const [filter, setFilter] = useState('all');
  const [filteredUsers, setFilteredUsers] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const users = await getUsers();
        setUsers(users);
        if (users.length <= usersLimit) {
          setLoadUsers(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [usersLimit]);

  useEffect(() => {
    switch (filter) {
      case 'follow':
        setFilteredUsers(
          users.filter(({ id }) => !followedUsersId.includes(id))
        );
        break;
      case 'following':
        setFilteredUsers(
          users.filter(({ id }) => followedUsersId.includes(id))
        );
        break;
      default:
        setFilteredUsers(users);
        break;
    }
  }, [users, followedUsersId, filter]);

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

  function handleLoadMore() {
    if (loadUsers) {
      setUsersLimit(usersLimit + 6);
      if (users.length <= usersLimit + 6) {
        setLoadUsers(false);
      }
    }
  }

  function handleFilterChange(value) {
    setFilter(value);
  }

  return (
    <>
      <BackButton to="/">
        {' '}
        <HiArrowLeft /> Go Back
      </BackButton>
      <DropDown
        options={options}
        filter={filter}
        onChange={handleFilterChange}
      />
      <List>
        {filteredUsers.slice(0, usersLimit).map(user => (
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
      {loadUsers && (
        <LoadMoreStyledButton type="button" onClick={handleLoadMore}>
          Load more
        </LoadMoreStyledButton>
      )}
    </>
  );
};
