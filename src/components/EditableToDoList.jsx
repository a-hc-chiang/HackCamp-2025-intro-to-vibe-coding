import { useState } from "react";

export default function EditableTodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Finish HackCamp exercise", isEditing: false },
    { id: 2, text: "Drink water", isEditing: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  // --- CRUD Handlers ---
  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo.trim(), isEditing: false }]);
    setNewTodo("");
  };

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  const startEdit = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, isEditing: true, editText: t.text } : t
      )
    );
  };

  const cancelEdit = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, isEditing: false } : t)));

  const saveEdit = (id) =>
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: t.editText, isEditing: false } : t
      )
    );

  const handleEditChange = (id, value) =>
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, editText: value } : t))
    );

  // --- Render ---
  return (
    <div className="todo-container">
      <h1>My To-Dos ✏️</h1>

      <div className="add-todo">
        <input
          type="text"
          placeholder="Add new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.id} className="todo-item">
            {t.isEditing ? (
              <>
                <input
                  type="text"
                  value={t.editText}
                  onChange={(e) => handleEditChange(t.id, e.target.value)}
                />
                <button onClick={() => saveEdit(t.id)}>Save</button>
                <button onClick={() => cancelEdit(t.id)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{t.text}</span>
                <div className="todo-actions">
                  <button onClick={() => startEdit(t.id)}>Edit</button>
                  <button onClick={() => deleteTodo(t.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
