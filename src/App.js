import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  color: #333;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 8px 16px;
  margin-top: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const TaskText = styled.span`
  flex-grow: 1;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? '#777' : '#333')};
`;

const TaskInput = styled.input`
  padding: 8px;
  margin-right: 10px;
`;

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false, date: new Date() },
    { id: 2, text: 'Task 2', completed: true, date: new Date() },
    // Add more tasks as needed
  ]);

  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskDate, setNewTaskDate] = useState(new Date());

  const addTask = () => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, text: newTaskText, completed: false, date: newTaskDate },
    ]);
    setNewTaskText('');
    setNewTaskDate(new Date());
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
    <Container>
      <Header>Task Tracker</Header>
      <div>
        <TaskInput
          type="text"
          placeholder="Enter task name"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <DatePicker selected={newTaskDate} onChange={(date) => setNewTaskDate(date)} />
        <Button onClick={addTask}>Add Task</Button>
      </div>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id}>
            <TaskText completed={task.completed}>{task.text}</TaskText>
            <span>{task.date.toISOString().split('T')[0]}</span>
            <Button onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </Button>
            <Button onClick={() => deleteTask(task.id)}>Delete</Button>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default App;
