import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Authorization: `token ${process.env.REACT_APP_ACCESS_TOKEN}`,
  },
});

export const getIssues = () =>
  authInstance.get('/issues', {
    params: {
      sort: 'comments',
      per_page: 10,
    },
  });
