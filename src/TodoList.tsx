// src/TodoList.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { addTodo, removeTodo, toggleComplete } from './todoSlice';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text) {
      dispatch(
        addTodo({
          id: Date.now(),
          text: text,
          completed: false,
        })
      );
      setText('');
    }
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new to-do"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;