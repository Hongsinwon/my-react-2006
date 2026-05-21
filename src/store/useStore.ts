import { create } from 'zustand';

interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));

export default useUserStore;
