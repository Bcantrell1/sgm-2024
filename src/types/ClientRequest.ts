export interface ClientRequest {
    id: string;
    name: string;
    number: string;
    email: string;
    workType: string;
    hasPets?: boolean;
    message: string;
    date: string;
    status: 'pending' | 'accepted' | 'rejected';
  }