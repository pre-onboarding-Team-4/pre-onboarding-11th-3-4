import { instance } from './axios';

type User = {
  login: string;
  id: number;
};

export type Issue = {
  id: number;
  title: string;
  comments: number;
  number: number;
  created_at: string;
  user: User;
};

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
