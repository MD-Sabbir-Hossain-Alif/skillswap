'use server'

import { serverMutation } from "../core/server";


export const createProposal = async (newProposalData) => {
    return serverMutation('/api/proposals', newProposalData);
}

export const updateProposal = async (proposalId, updatedProposalData) => {
    return serverMutation(`/api/proposals/${proposalId}`, updatedProposalData, 'PATCH');
}