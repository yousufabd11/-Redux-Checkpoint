import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../redux/actions/taskActions';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTask(task.id, newDescription));
        setIsEditing(false);
    };

    return (
        <div>
            <input 
                type="checkbox" 
                checked={task.isDone} 
                onChange={() => dispatch(toggleTask(task.id))} 
            />
            {isEditing ? (
                <input 
                    type="text" 
                    value={newDescription} 
                    onChange={(e) => setNewDescription(e.target.value)} 
                />
            ) : (
                <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                    {task.description}
                </span>
            )}
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </div>
    );
};

export default Task;
