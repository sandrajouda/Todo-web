import React, { useState } from "react";

function Edit() {

    const [tasks, setTasks] = useState([]);

    const handleEditClick = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].editing = !updatedTasks[index].editing;
        setTasks(updatedTasks);
    };

    const handleTaskEditChange = (e, index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].text = e.target.value;
        setTasks(updatedTasks);
    };

    const handleTaskEditBlur = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].editing = false;
        setTasks(updatedTasks);
    };
    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div className='task'>
                            {task.editing ? (
                                <input type="text" value={task.text} onChange={(e) => handleTaskEditChange(e, index)} onBlur={() => handleTaskEditBlur(index)} autoFocus />
                            ) : (

                                <span className={task.completed ? 'completed' : ''}>{task.text}</span>
                            )}
                        </div>
                        <div className='buttonDiv'>
                            <button onClick={() => handleEditClick(index)} className='editbutton'> {task.editing ? 'Save' : 'Edit'} </button>
                        </div>
                    </li>
                ))};
            </ul>

        </div>

    );
}
