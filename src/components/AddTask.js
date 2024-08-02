import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (description.trim()) {
            dispatch(addTask({ id: uuidv4(), description, isDone: false }));
            setDescription('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
};

export default AddTask;
