import React, { useState } from "react";
import './Complete.css';

function Complete({ props }) {

    const [tasks, setTasks] = useState([]);


    const handleCompleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };
    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <button onClick={() => handleCompleteTask(index)} className='completebutton'>Complete</button>
                    </li>
                ))};
            </ul>
        </div>
    );
} export default Complete;