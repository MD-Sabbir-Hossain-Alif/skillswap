"use client";

import Link from "next/link";
import { Button, Card } from "@heroui/react";
import { FileText, Clock, CheckCircle, DollarSign } from "lucide-react";

export default function FreelancerDashboard() {
    const recentProposals = [
        {
            task: "Frontend Development for SaaS",
            bid: "$1,200",
            date: "Oct 24, 2024",
            status: "Accepted",
        },
        {
            task: "Logo Design & Brand Identity",
            bid: "$850",
            date: "Oct 22, 2024",
            status: "Pending",
        },
        {
            task: "Python Script for Data Scraping",
            bid: "$300",
            date: "Oct 18, 2024",
            status: "Declined",
        },
    ];

    return (
        <div className="min-h-screen bg-[#f8f9fa] pb-12">
            <div className="max-w-screen-2xl mx-auto px-6 pt-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
                    <div>
                        <h1 className="text-4xl font-bold text-[#191c1d]">
                            Dashboard Overview
                        </h1>
                        <p className="text-[#434655] mt-2 text-lg">
                            Welcome back! Here&apos;s a summary of your recent
                            activity.
                        </p>
                    </div>

                    <Button
                        as={Link}
                        href="/tasks"
                        className="mt-6 md:mt-0 bg-[#2563eb] hover:bg-[#1e53d0] rounded-2xl px-6 py-3 font-semibold"
                    >
                        Browse Open Tasks
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Total Proposals */}
                    <Card className="p-6 border border-[#e7e8e9] rounded-3xl bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <FileText className="w-7 h-7 text-[#004ac6]" />
                            </div>
                            <span className="text-sm font-medium text-[#737686]">
                                Total Proposals
                            </span>
                        </div>
                        <div className="mt-8 text-5xl font-bold tracking-tighter text-[#191c1d]">
                            42
                        </div>
                    </Card>

                    {/* Pending */}
                    <Card className="p-6 border border-[#e7e8e9] rounded-3xl bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                                <Clock className="w-7 h-7 text-amber-600" />
                            </div>
                            <span className="text-sm font-medium text-[#737686]">
                                Pending
                            </span>
                        </div>
                        <div className="mt-8 text-5xl font-bold tracking-tighter text-[#191c1d]">
                            12
                        </div>
                    </Card>

                    {/* Accepted */}
                    <Card className="p-6 border border-[#e7e8e9] rounded-3xl bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                                <CheckCircle className="w-7 h-7 text-emerald-600" />
                            </div>
                            <span className="text-sm font-medium text-[#737686]">
                                Accepted
                            </span>
                        </div>
                        <div className="mt-8 text-5xl font-bold tracking-tighter text-[#191c1d]">
                            8
                        </div>
                    </Card>

                    {/* Total Earnings */}
                    <Card className="p-6 border border-[#e7e8e9] rounded-3xl bg-white hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                                <DollarSign className="w-7 h-7 text-purple-600" />
                            </div>
                            <span className="text-sm font-medium text-[#737686]">
                                Total Earnings
                            </span>
                        </div>
                        <div className="mt-8 text-5xl font-bold tracking-tighter text-[#191c1d]">
                            $4,250
                        </div>
                    </Card>
                </div>

                {/* You can add more sections below like Recent Proposals, Active Projects, etc. */}
                <Card className="mt-10 border border-[#e7e8e9] rounded-3xl overflow-hidden bg-white">
                    <div className="flex justify-between items-center px-8 py-5 border-b border-[#e7e8e9]">
                        <h2 className="text-2xl font-semibold text-[#191c1d]">
                            Recent Proposals
                        </h2>
                        <Link
                            href="/proposals"
                            className="text-[#2563eb] hover:underline font-medium"
                        >
                            View All →
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-[#f8f9fa] border-b border-[#e7e8e9]">
                                    <th className="text-left py-4 px-8 font-medium text-[#434655] text-sm">
                                        TASK
                                    </th>
                                    <th className="text-left py-4 px-8 font-medium text-[#434655] text-sm">
                                        BID
                                    </th>
                                    <th className="text-left py-4 px-8 font-medium text-[#434655] text-sm">
                                        DATE
                                    </th>
                                    <th className="text-left py-4 px-8 font-medium text-[#434655] text-sm">
                                        STATUS
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e7e8e9]">
                                {recentProposals.map((proposal, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-[#f8f9fa] transition-colors"
                                    >
                                        <td className="py-5 px-8 font-medium text-[#191c1d]">
                                            {proposal.task}
                                        </td>
                                        <td className="py-5 px-8 font-semibold text-[#191c1d]">
                                            {proposal.bid}
                                        </td>
                                        <td className="py-5 px-8 text-[#434655]">
                                            {proposal.date}
                                        </td>
                                        <td className="py-5 px-8">
                                            <span
                                                className={`rounded-full px-4 py-1 text-xs font-medium ${
                                                    proposal.status ===
                                                    "Accepted"
                                                        ? "bg-emerald-100 text-emerald-700"
                                                        : proposal.status ===
                                                            "Pending"
                                                          ? "bg-amber-100 text-amber-700"
                                                          : "bg-red-100 text-red-700"
                                                }`}
                                            >
                                                {proposal.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
}
