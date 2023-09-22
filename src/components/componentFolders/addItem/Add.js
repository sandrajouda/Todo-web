import React, { useState } from "react";
import './Add.css';
import Complete from "../completeItem/Complete";

function Add({ props }) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');



    const handleAddTask = () => {
        if (newTask.trim() === '') return;
        const updatedTasks = [...tasks, { text: newTask, completed: false }];
        setTasks(updatedTasks);
        setNewTask('');
    };


    return (

        <div>
            <div className='Div1'>
                <label className='naame'> Name </label>
                <input type="text" className='input1' value={newTask} onChange={(e) => setNewTask(e.target.value)} />

                <lable className="des"> Description </lable>
                <input type="text" className='input2' />

                <button onClick={handleAddTask} className='Addbutton'>Add</button>

            </div>
            <div className="Div2">
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>Task :{task.text} </li>

                    ))}
                </ul>
            </div>
        </div>


    );
} export default Add;