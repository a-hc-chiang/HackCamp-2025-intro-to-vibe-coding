import { useState } from 'react';
import '../App.css';

export default function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    const trimmed = editText.trim();
    if (trimmed !== '') {
      onEdit(todo.id, trimmed);
      setIsEditing(false);
    }
  };

  return (
    <div className="to-do-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <div
            onClick={() => onToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {todo.text}
          </div>
          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}
