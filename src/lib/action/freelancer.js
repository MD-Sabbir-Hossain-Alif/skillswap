'use server'

import { serverMutation } from "../core/server";

export const createFreelancer = async (newFreelancerData) => {
    return serverMutation('/api/freelancers', newFreelancerData);
}