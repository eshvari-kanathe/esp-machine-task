import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo, toggleTodo } from "./redux/slice/todoSlice";
import "./App.css"

export default function Todo() {
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const startEdit = (todo) => {
    setEditIndex(todo.index);
    setEditText(todo.title);
  };

  const saveEdit = () => {
    if (editText.trim()) {
      dispatch(editTodo({ index: editIndex, newTitle: editText }));
      setEditIndex(null);
      setEditText("");
    }
  };
return (
  <div className="app-container">
    <h2 className="title">TODO</h2>

    <div className="input-group">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>

    <ul className="todo-list">
      {todos.map((todo,index) => (
        <li key={index} className="todo-item">

          {editIndex === todo.index ? (
            <div className="todo-row">
              <input
                value={editText}
                onChange={e => setEditText(e.target.value)}
              />
              <button onClick={saveEdit}>Save</button>
            </div>
          ) : (
            <>
              <div className="todo-row">
                <span className={`todo-title ${todo.completed ? "completed" : ""}`}>
                  {todo.title}
                </span>

                <span className="status">
                  {todo.completed ? "Completed" : "Pending"}
                </span>
              </div>

              <div className="actions">
                <button onClick={() => dispatch(toggleTodo(todo.id))}>
                  Toggle
                </button>

                <button onClick={() => startEdit(todo)}>
                  Edit
                </button>

                <button onClick={() => dispatch(deleteTodo(todo.index))}>
                  Delete
                </button>
              </div>
            </>
          )}

        </li>
      ))}
    </ul>
  </div>
);
}