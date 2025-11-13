import './App.css';
import TodoItem from './components/ToDoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn AI toolz', completed: false },
    { id: 2, text: 'Build an app wit AI toolz', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const addTodo = () => {
    const trimmed = newTodo.trim();
    if (trimmed === '') return;

    const newItem = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };
    setTodos([...todos, newItem]);
    setNewTodo('');
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  };

  return (
    <div className='to-do-app-container'>
      <h1>Nugget's super simple to-do app</h1>
      <div className="input-new-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task for Nugget..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-container">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={editTodo}
            onEdit={deleteTodo}
          />
        ))}
      </div>
      <p>
        What are some things Nugget should do today??
      </p>
    </div>
  );
}
