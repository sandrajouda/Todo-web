import React, { useState } from 'react';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveClick = () => {
        onEdit(task.id, editedText);
        setIsEditing(false);
    };

    return (
        <li className='task-wrapper'>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
            ) : (
                <span className='task-name'>{task.text}</span>
            )}
            {isEditing ? (
                <button className='save-button' onClick={handleSaveClick}>Save</button>
            ) : (
                <button className='edit-button' onClick={handleEditClick}>Edit</button>
            )}
            <button className='delete-button' onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
};

export const TaskList = ({ tasks, onToggle, onDelete, onEdit }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
};
