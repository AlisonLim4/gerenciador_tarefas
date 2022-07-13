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
      tittle: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      tittle: 'Estudar inglês',
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      else {
        return task;
      }
      setTasks(newTasks);
    });
  };

  const handleTaskAddition = (taskTittle) => {
    if (String(taskTittle).length !== 0) {
      const newTasks = [
        ...tasks,
        {
          tittle: taskTittle,
          id: uuidv4(),
          completed: false,
        },
      ];
      setTasks(newTasks);
    } else {
      window.alert('Você nao pode inserir uma task vazia!');
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
