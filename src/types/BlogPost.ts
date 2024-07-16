import { Timestamp } from 'firebase/firestore';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Timestamp | { seconds: number, nanoseconds: number } | string | number;
  updatedAt: Timestamp | { seconds: number, nanoseconds: number } | string | number;
  published: boolean;
}