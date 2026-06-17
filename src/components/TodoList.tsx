import { memo } from 'react';
import type { Todo } from '../store/useTodoStore';
import { useTodoStore } from '../store/useTodoStore';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem = memo(function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={() => onToggle(todo.id)} style={{ cursor: 'pointer' }}>
        {todo.text}
      </span>
      <button
        type="button"
        onClick={() => onRemove(todo.id)}
        style={{ marginLeft: '10px' }}
      >
        삭제
      </button>
    </li>
  );
});

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  if (todos.length === 0) {
    return <p>할 일이 없습니다.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onRemove={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
