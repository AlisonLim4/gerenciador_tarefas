import React from 'react';
import './Tasks.css';
import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion}
          />
        );
      })}
    </>
  );
};
export default Tasks;
