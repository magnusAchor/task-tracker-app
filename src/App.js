import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    // Add more tasks as needed
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { id: tasks.length + 1, text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <div>
        <button onClick={() => addTask(`New Task ${tasks.length + 1}`)}>
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
