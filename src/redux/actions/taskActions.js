import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS } from './types';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
});

export const editTask = (id, description) => ({
    type: EDIT_TASK,
    payload: { id, description }
});

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id
});

export const filterTasks = (filter) => ({
    type: FILTER_TASKS,
    payload: filter
});
