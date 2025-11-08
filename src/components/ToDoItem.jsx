import '../App.css';

export default function ToDoItem({ todo, onToggle, onDelete }) {
  return (
    <div className='to-do-item'>
      <div
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {todo.text}
      </div>
      <button
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}