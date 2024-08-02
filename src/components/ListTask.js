import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks } from '../redux/actions/taskActions';

const ListTask = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const filter = useSelector((state) => state.tasks.filter);
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter(task => {
        if (filter === 'DONE') return task.isDone;
        if (filter === 'NOT_DONE') return !task.isDone;
        return true;
    });

    return (
        <div>
            <div>
                <button onClick={() => dispatch(filterTasks('ALL'))}>All</button>
                <button onClick={() => dispatch(filterTasks('DONE'))}>Done</button>
                <button onClick={() => dispatch(filterTasks('NOT_DONE'))}>Not Done</button>
            </div>
            {filteredTasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;
