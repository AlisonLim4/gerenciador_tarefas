import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import { BrowserRouter, Router, Route } from 'react-router-dom';

import Tasks from './Tasks';
import AddTask from './AddTask';
import axios from 'axios';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10',
      );
      setTasks(data);
    };
    fetchTasks();
  }, []);
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });
    setTasks(newTasks);
  };
  const handleTaskAddition = (taskTitle) => {
    if (String(taskTitle).length !== 0) {
      const newTasks = [
        ...tasks,
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        },
      ];
      setTasks(newTasks);
    } else {
      window.alert('Você nao pode inserir uma tarefa sem nome!');
    }
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };
  return (
    <div>
      <>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      </>
    </div>
  );
};

export default Home;
