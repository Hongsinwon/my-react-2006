import { create } from 'zustand';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  clearTodos: () => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  // 1. 상태(State)
  todos: [
    { id: 1, text: 'Zustand Study', completed: false },
    { id: 2, text: '전역 상태 실습', completed: false },
  ],

  // 2. 액션(Actions)
  // 할 일 추가
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),

  // 할 일 삭제
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  // 완료 상태 토글
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),

  // 전체 삭제
  clearTodos: () => set({ todos: [] }),
}));
