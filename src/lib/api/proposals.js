import { serverFetch } from "../core/server";

export const getProposals = async () => {
    return serverFetch('/api/proposals');
}

export const getProposalsByTaskId = async (taskId) => {
    return serverFetch(`/api/proposals/task/${taskId}`);
}

export const getProposalsByClientId = async (clientId) => {
    return serverFetch(`/api/proposals/client/${clientId}`);
}
