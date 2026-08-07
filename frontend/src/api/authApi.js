import axios from './axios.js';

export const login = async (username, password) => {
  const { data } = await axios.post('/auth/login', { username, password });
  return data;
};

export const logout = async () => {
  await axios.post('/auth/logout');
};
