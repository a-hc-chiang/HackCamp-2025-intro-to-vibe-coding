function NewToDoInput({ newTodo, setNewTodo, addTodo }) {
  return (
    <div className='input-new-todo'>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task for Nugget..."
      />
      <button onClick={addTodo}>Remove</button>
    </div>
  );
}