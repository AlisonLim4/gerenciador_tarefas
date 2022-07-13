import React, { useState } from 'react';
import './AddTask.css';
import Button from './Button';

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick} className="button">
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
