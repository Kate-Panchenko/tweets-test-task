import axios from 'axios';

axios.defaults.baseURL = 'https://644929e4b88a78a8f0ff991c.mockapi.io';

export async function getUsers() {
  const response = await axios.get('/users');
  return response.data;
}

export async function increaseUserFollowers(user) {
  const response = await axios.put(`/users/${user.id}`, {
    username: user.username,
    avatar: user.avatar,
    followers: user.followers + 1,
    tweets: user.tweets,
  });
  console.log(response.data);
  return response.data;
}

export async function decreaseUserFollowers(user) {
  const response = await axios.put(`/users/${user.id}`, {
    username: user.username,
    avatar: user.avatar,
    followers: user.followers - 1,
    tweets: user.tweets,
  });
  console.log(response.data);
  return response.data;
}
