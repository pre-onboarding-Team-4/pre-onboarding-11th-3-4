import { instance } from './axios';

interface User {
  login: string;
  id: number;
  avatar_url: string;
}

export interface Issue {
  id: number;
  title: string;
  comments: number;
  number: number;
  created_at: string;
  user: User;
}

export interface IssueDetail {
  number: string;
  title: string;
  author: string;
  created_at: string;
  comments: number;
  body: string;
  user: User;
}

const owner = 'facebook';
const repo = 'react';
export const fetchIssues = async (page: number): Promise<Issue[]> => {
  try {
    const response = await instance.get<Issue[]>(
      `repos/${owner}/${repo}/issues?state=open&sort=comments&direction=desc`,
      {
        params: {
          page,
          per_page: 50,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchIssueDetail = async (number: string): Promise<IssueDetail[]> => {
  try {
    const response = await instance.get(`/repos/${owner}/${repo}/issues/${number}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
