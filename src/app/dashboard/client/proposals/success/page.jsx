"use server";

import Link from "next/link";
import { CheckCircle, ArrowRight, Home } from "lucide-react";

export default async function PaymentSuccess({ searchParams }) {
    const { session_id } = await searchParams;
    console.log(session_id);

    if (!session_id) {
        return (
            <div className="flex items-center justify-center px-6">
                <div className="max-w-md w-full text-center">
                    <div className="bg-white border border-red-200 rounded-3xl p-10">
                        <p className="text-red-600 text-xl">Invalid session.</p>
                        <p className="text-[#737686] mt-2">
                            Please try again or contact support.
                        </p>
                        <Link
                            href="/"
                            className="mt-6 inline-block text-[#004ac6] hover:underline"
                        >
                            ← Go Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center py-12 px-6">
            <div className="max-w-lg w-full">
                {/* Success Card */}
                <div className="bg-white border border-[#e7e8e9] rounded-3xl shadow-xl p-6 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mx-auto mb-8">
                        <CheckCircle className="w-14 h-14 text-emerald-600" />
                    </div>

                    <h1 className="text-4xl font-bold text-[#191c1d] mb-3">
                        Payment Successful!
                    </h1>
                    <p className="text-[#434655] mb-10 leading-relaxed">
                        Thank you for your payment. Your project is now
                        officially in progress.
                    </p>

                    <div className="flex justify-between items-center gap-2">
                        <Link
                            href="/dashboard/client"
                            className="w-full h-10 rounded-2xl bg-[#2563eb] hover:bg-[#1e53d0] text-white font-semibold flex items-center justify-center gap-3 transition-all active:scale-[0.985]"
                        >
                            Go to Dashboard
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        <Link
                            href="/"
                            className="w-full h-10 rounded-2xl border border-[#e7e8e9] hover:bg-[#f8f9fa] text-[#191c1d] font-medium flex items-center justify-center gap-3"
                        >
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </div>
                </div>

                {/* Help Text */}
                <p className="text-center text-xs text-[#737686] mt-8">
                    Need help? Contact us at{" "}
                    <a
                        href="mailto:support@skillswap.com"
                        className="underline hover:text-[#191c1d]"
                    >
                        support@skillswap.com
                    </a>
                </p>
            </div>
        </div>
    );
}
