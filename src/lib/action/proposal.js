'use server'

import { serverMutation } from "../core/server";


export const createProposal = async (newProposalData) => {
    return serverMutation('/api/proposals', newProposalData);
}