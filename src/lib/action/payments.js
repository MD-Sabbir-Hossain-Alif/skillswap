'use server'

import { serverMutation } from "../core/server";

export const createPayments = async (createPayments) => {
    return serverMutation('/api/payments', createPayments);
}