import React from 'react';
import './Tasks.css';
import Task from './Task';

const Tasks = ({ tasks, handleTaskClick }) => {
  return (
    <>
      {tasks.map((task) => {
        return <Task task={task} handleTaskClick={handleTaskClick} />;
      })}
    </>
  );
};
export default Tasks;
