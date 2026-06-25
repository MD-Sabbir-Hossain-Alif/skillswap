import { serverFetch } from "../core/server";

export const getTasks = async () => {
    return serverFetch('/api/tasks');
}

export const getClientTaskById = async (taskId) => {
    return serverFetch(`/api/tasks/${taskId}`);
}

export const getTaskById = async (taskId) => {
    return serverFetch(`/api/tasks/${taskId}`);
}