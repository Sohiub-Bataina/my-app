import React, { useRef, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const inputRef = useRef();
  const editInputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value.trim();
    if (!text) return;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
  };

  const handleSaveEdit = (index) => {
    const newText = editInputRef.current.value.trim();
    if (!newText) return;
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
    setEditingIndex(null);
  };

  return (
    <div className="to-do-container">
      <h2 className="text-center mb-4">To-Do List</h2>
      <ul className="list-group">
        {todos.map(({ text, completed }, index) => (
          <li className="list-group-item" key={index}>
            <div className="d-flex justify-content-between align-items-center">
              {editingIndex === index ? (
                <div className="d-flex flex-grow-1 gap-2">
                  <input
                    ref={editInputRef}
                    defaultValue={text}
                    className="form-control"
                  />
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleSaveEdit(index)}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setEditingIndex(null)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span
                    className={`flex-grow-1 ${completed ? "text-decoration-line-through" : ""}`}
                    onClick={() => handleItemDone(index)}
                  >
                    {text}
                  </span>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleEditItem(index)}
                    >
                      ✏️
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteItem(index)}
                    >
                      ❌
                    </button>
                  </div>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="input-group my-3">
        <input
          ref={inputRef}
          className="form-control"
          placeholder="Enter item..."
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Todo;
