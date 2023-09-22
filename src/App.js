import React, { useState } from 'react';
import Add from './components/componentFolders/addItem/Add';
import Delete from './components/componentFolders/deleteItem/Delete';
import Complete from './components/componentFolders/completeItem/Complete';
import Edit from './components/componentFolders/editItem/Edit';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);

  const data = [
    { id: 1, text: 'task 1' },
    { id: 2, text: 'task 2' },
    { id: 3, text: 'task 3' },
    { id: 3, text: 'task 4' },
    { id: 3, text: 'task 5' },
  ];


  return (
    <div className="App">
      <div>
        <h1 className='title'>My Todos</h1>
        <Add key={data.id} />
      </div>

      <div className='Div3'>
        {tasks.map((task, index) => (
          <li key={index}>Task :{task.text}</li>
        ))}
        <Edit key={data.id} />
        <Complete key={data.id} />
        <Delete key={data.id} />
      </div>
    </div>
  );
}
export default App;