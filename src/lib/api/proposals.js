import { serverFetch } from "../core/server";

export const getProposals = async () => {
    return serverFetch('/api/proposals');
}

export const getProposalById = async (proposalId) => {
    return serverFetch(`/api/proposals/${proposalId}`);
}

export const getProposalsByTaskId = async (taskId) => {
    return serverFetch(`/api/proposals/task/${taskId}`);
}

export const getProposalsByClientId = async (clientId) => {
    return serverFetch(`/api/proposals/client/${clientId}`);
}
