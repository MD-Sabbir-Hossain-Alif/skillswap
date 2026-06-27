"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-6">
            <div className="max-w-2xl mx-auto text-center">
                {/* Big 404 */}
                <div className="text-[180px] font-bold text-[#e7e8e9] select-none leading-none -mt-10">
                    404
                </div>

                <div className="-mt-16 mb-8">
                    <div className="inline-flex items-center gap-3 bg-white rounded-3xl px-6 py-3 shadow-sm border border-[#e7e8e9]">
                        <div className="text-4xl">🔍</div>
                        <div>
                            <h1 className="text-3xl font-bold text-[#191c1d]">
                                Page Not Found
                            </h1>
                            <p className="text-[#434655]">
                                Oops! The task you&apos;re looking for
                                doesn&apos;t exist.
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-[#737686] max-w-md mx-auto mb-10">
                    The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        as={Link}
                        href="/"
                        className="h-14 rounded-2xl bg-[#2563eb] hover:bg-[#1e53d0] text-white font-semibold flex items-center gap-3 px-8"
                    >
                        <Home className="w-5 h-5" />
                        Go Back Home
                    </Button>

                    <Button
                        as={Link}
                        href="/tasks"
                        variant="outline"
                        className="h-14 rounded-2xl border-[#e7e8e9] hover:bg-white flex items-center gap-3 px-8"
                    >
                        <Search className="w-5 h-5" />
                        Browse Tasks
                    </Button>
                </div>

                {/* <div className="mt-16 text-sm text-[#737686]">
                    Need help?{" "}
                    <Link
                        href="/contact"
                        className="text-[#004ac6] hover:underline"
                    >
                        Contact Support
                    </Link>
                </div> */}
            </div>
        </div>
    );
}
