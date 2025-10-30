import React from 'react';
import '../App.css';

export default function ToDoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%',
        borderBottom: '1px solid #ccc',
      }}
    >
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