import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_END_POINT,
  headers: { 'Content-Type': 'application/vnd.github+json' },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    if (accessToken !== undefined) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
