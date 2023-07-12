import axios from 'axios';

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
const baseURL = process.env.REACT_APP_END_POINT;

export const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
