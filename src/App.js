import React from 'react';
import './App.css';
import Task from './components/tasks/Task';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='container'>
        <Task></Task>
      </div>
    </div>
  );
}

export default App;
