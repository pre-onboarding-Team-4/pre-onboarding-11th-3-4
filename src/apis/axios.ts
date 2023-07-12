import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_GITHUB_REST_API}`,
  headers: {
    'Content-Type': 'application/vnd.github+json',
  },
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

export const getIssue = async () => {
  const res = await instance.get('', {
    params: {
      sort: 'comments',
      per_page: 10,
    },
  });
  return res;
};
