import { useTodoStore } from '../store/useTodoStore';

const TodoList = () => {
  // 상태와 액션을 한 번에 가져오기
  const { todos, toggleTodo, removeTodo } = useTodoStore((state) => ({
    todos: state.todos,
    toggleTodo: state.toggleTodo,
    removeTodo: state.removeTodo,
  }));

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)} style={{ marginLeft: '10px' }}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
