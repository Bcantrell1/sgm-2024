export interface Job {
  id: string;
  client: string;
  number: string;
  email: string;
  workType: string;
  hasPets?: boolean;
  message: string;
  date: string;
  project: string;
  status: 'Completed' | 'In Progress' | 'Scheduled' | 'Not Started' | 'Scheduled';
}