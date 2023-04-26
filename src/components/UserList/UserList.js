import { UserCard } from 'components/UserCard/UserCard';
import { useEffect, useState } from 'react';
import { getUsers } from 'services/api';
import { UserItem, List } from './UserList.styled';

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then(users => {
        setUsers(users);
      })
      .catch(error => setError(error));
  }, []);

  return (
    <>
      <List>
        {users.map(user => (
          <UserItem key={user.id}>
            <UserCard user={user} />
          </UserItem>
        ))}
      </List>
    </>
  );
};
