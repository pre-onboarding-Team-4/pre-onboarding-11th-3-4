import { instance } from './axios';

interface User {
  login: string;
  id: number;
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
  number: number;
  title: string;
  author: string;
  writingDate: string;
  numComments: number;
  authorProfileImage: string;
  text: string;
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

export const fetchIssueDetail = async (number: number): Promise<IssueDetail[]> => {
  try {
    const response = await instance.get(`/repos/${owner}/${repo}/issues/${number}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
