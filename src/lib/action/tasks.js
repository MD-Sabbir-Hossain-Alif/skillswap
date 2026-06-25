'use server'

import { serverMutation } from "../core/server";


export const createTask = async (newTaskData) => {
    return serverMutation('/api/tasks', newTaskData);
}

export const updateTask = async (taskId, updatedTaskData) => {
    return serverMutation(`/api/tasks/${taskId}`, updatedTaskData, 'PUT');
}

export const deleteTask = async (taskId) => {
    return serverMutation(`/api/tasks/${taskId}`, {}, 'DELETE');
}