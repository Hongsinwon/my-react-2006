import type { FormEvent } from 'react';
import { useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

const TodoInput = () => {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo); // 액션 선택

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    addTodo(trimmed);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInput;