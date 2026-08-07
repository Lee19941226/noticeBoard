import axios from './axios.js';

export const fetchPosts = async ({ page = 1, size = 10 } = {}) => {
  const { data } = await axios.get('/posts', { params: { page, size } });
  return data;
};

export const fetchPost = async (postId) => {
  const { data } = await axios.get(`/posts/${postId}`);
  return data;
};

export const createPost = async (payload) => {
  const { data } = await axios.post('/posts', payload);
  return data;
};

export const updatePost = async (postId, payload) => {
  const { data } = await axios.put(`/posts/${postId}`, payload);
  return data;
};

export const deletePost = async (postId) => {
  await axios.delete(`/posts/${postId}`);
};
