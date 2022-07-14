import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';
import AddTask from './components/AddTask';
import Home from './components/Home';
import TaskDetails from './components/TaskDetails';
// import TaskDetails from './components/TaskDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:taskTitle" element={<TaskDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
