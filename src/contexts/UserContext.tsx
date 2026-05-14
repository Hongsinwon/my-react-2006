import { createContext } from 'react';

export type User = {
  name: string;
  age: number;
};

export const UserContext = createContext<User | null>(null);
