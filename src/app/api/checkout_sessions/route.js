import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import { getProposalById } from '@/lib/api/proposals'
import { getUserSession } from '@/lib/core/session'

export async function POST(req) {
    try {
        const formData = await req.formData();

        const proposalId = formData.get("proposalId");

        const proposalData = await getProposalById(proposalId);
        const { taskTitle, budget } = proposalData;

        const user = await getUserSession();

        const headersList = await headers()
        const origin = headersList.get('origin')

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            customer_email: user.email,
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: taskTitle,
                        },
                        unit_amount: Number(budget) * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            metadata: { proposalId },
            success_url: `${origin}/dashboard/client/proposals/success?session_id={CHECKOUT_SESSION_ID}`,
        });
        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}