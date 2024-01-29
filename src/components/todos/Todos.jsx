import './todos.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../utils/addTodo';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');
  const newTodo = { id: uuidv4(), task: task, completed: false };
  const updateTodo = (id, task) => {
    const update = (todos) => {
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task };
        }
        return todo;
      });
    };
    setTodos((todos) => update(todos));
  };
  return (
    <>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your task"
          onChange={(event) => setTask(event.target.value)}
        />
        <button
          className="add-button"
          onClick={() => addTodo(setTodos, newTodo)}
        ></button>
      </div>
      <div className="container">
        <ul>
          {todos?.map((todo) => (
            <div key={todo.id}>
              <li>{todo.task}</li>
              <input
                type="text"
                onChange={(event) => setUpdateTask(event.target.value)}
                value={updateTask}
              />
              <button
                onClick={() => {
                  updateTodo(todo.id, updateTask);
                }}
              >
                Update
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todos;
