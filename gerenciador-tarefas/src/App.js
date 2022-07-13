import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Tasks from './components/Tasks';
import './App.css';
import AddTask from './components/AddTask';

function App() {
  // let mensagem = 'Hello world!';
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Estudar inglês',
      completed: true,
    },
  ]);

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

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} />
      </div>
    </>
  );
}

export default App;
