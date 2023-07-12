import { Dispatch } from 'react';
import axios from 'axios';
import { IssueListAction } from '../context/IssueListProvider';
import { IssueDetailAction } from '../context/IssueDetailProvider';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_GITHUB_API_ENDPOINT}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getIssueList(dispatch: Dispatch<IssueListAction>, page: number) {
  dispatch({ type: 'SET_LOADING' });
  try {
    const response = await instance.get(`issues?sort=comments&per_page=10&page=${page}`);
    dispatch({ type: 'GET_ISSUE_LIST', data: response.data });
  } catch (error) {
    Promise.reject(error);
  }
}

export async function getIssueDetail(dispatch: Dispatch<IssueDetailAction>, id: number) {
  dispatch({ type: 'SET_LOADING' });
  try {
    const response = await instance.get(`issues/${id}`);
    dispatch({ type: 'GET_ISSUE_DETAIL', data: response.data });
  } catch (error) {
    Promise.reject(error);
  }
}

instance.interceptors.request.use(
  (config) => {
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
    const newConfig = config;
    if (accessToken !== undefined) {
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
