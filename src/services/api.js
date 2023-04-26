import axios from 'axios';

axios.defaults.baseURL = 'https://644929e4b88a78a8f0ff991c.mockapi.io';

export async function getUsers() {
  const response = await axios.get('/users');
  return response.data;
}
