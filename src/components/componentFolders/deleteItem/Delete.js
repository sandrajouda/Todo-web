import React, { useState } from "react";
import './Delete.css';

function Delete(props) {
  const [tasks, setTasks] = useState([]);


  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={task.id}>
            <button onClick={() => handleDeleteTask(task.id)} className='deletebutton'>Delete</button>
          </li>
        ))};
      </ul>
    </div>
  );
}
export default Delete;