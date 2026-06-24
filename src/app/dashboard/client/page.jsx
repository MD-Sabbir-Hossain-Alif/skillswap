"use client";

import Link from "next/link";
import { Button, Card, Badge } from "@heroui/react";
import { Plus, Eye, Clock, CheckCircle, DollarSign } from "lucide-react";

const stats = [
    {
        label: "Total Tasks",
        value: "24",
        icon: <Clock className="w-6 h-6" />,
        color: "blue",
    },
    {
        label: "Open",
        value: "3",
        icon: <Eye className="w-6 h-6" />,
        color: "emerald",
    },
    {
        label: "In Progress",
        value: "5",
        icon: <CheckCircle className="w-6 h-6" />,
        color: "amber",
    },
    {
        label: "Total Spent",
        value: "$12,450",
        icon: <DollarSign className="w-6 h-6" />,
        color: "purple",
    },
];

const recentTasks = [
    {
        title: "Redesign Landing Page",
        category: "Design",
        budget: "$1,200",
        deadline: "Oct 24, 2024",
        status: "In Progress",
    },
    {
        title: "Develop API Integration",
        category: "Development",
        budget: "$3,500",
        deadline: "Nov 02, 2024",
        status: "Open",
    },
    {
        title: "Write Technical Documentation",
        category: "Writing",
        budget: "$500",
        deadline: "Oct 15, 2024",
        status: "Completed",
    },
    {
        title: "Create Marketing Video",
        category: "Video",
        budget: "$2,000",
        deadline: "Nov 10, 2024",
        status: "Open",
    },
];

export default function ClientDashboard() {
    return (
        <div className="min-h-screen bg-[#f8f9fa] pb-12">
            <div className="max-w-screen-2xl mx-auto px-6 pt-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
                    <div>
                        <h1 className="text-4xl font-bold text-[#191c1d]">
                            Welcome back, Acme Corp
                        </h1>
                        <p className="text-[#434655] mt-2 text-lg">
                            Here is an overview of your current projects and
                            activities.
                        </p>
                    </div>

                    <div className="flex gap-4 mt-6 md:mt-0">
                        <Button
                            as={Link}
                            href="/proposals"
                            variant="outline"
                            className="rounded-2xl px-6 flex items-center gap-2"
                        >
                            <Eye className="w-4 h-4" />
                            View Proposals
                        </Button>
                        <Button
                            as={Link}
                            href="/post-task"
                            className="rounded-2xl bg-[#2563eb] hover:bg-[#1e53d0] px-6 flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            Post a New Task
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="p-6 border border-[#e7e8e9] rounded-3xl bg-white"
                        >
                            <div className="flex items-center justify-between">
                                <div
                                    className={`w-12 h-12 rounded-2xl bg-${stat.color}-100 flex items-center justify-center text-${stat.color}-600`}
                                >
                                    {stat.icon}
                                </div>
                                <span className="text-sm text-[#737686]">
                                    {stat.label}
                                </span>
                            </div>
                            <div className="mt-6 text-4xl font-bold text-[#191c1d] tracking-tight">
                                {stat.value}
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Recent Tasks */}
                    <div className="lg:col-span-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold text-[#191c1d]">
                                My Recent Tasks
                            </h2>
                            <Link
                                href="/tasks"
                                className="text-[#2563eb] hover:underline font-medium"
                            >
                                View All
                            </Link>
                        </div>

                        <Card className="border border-[#e7e8e9] rounded-3xl overflow-hidden bg-white">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-[#e7e8e9] bg-[#f8f9fa]">
                                            <th className="text-left py-4 px-4 font-medium text-[#434655]">
                                                Title
                                            </th>
                                            <th className="text-left py-4 px-4 font-medium text-[#434655]">
                                                Category
                                            </th>
                                            <th className="text-left py-4 px-4 font-medium text-[#434655]">
                                                Budget
                                            </th>
                                            <th className="text-left py-4 px-4 font-medium text-[#434655]">
                                                Deadline
                                            </th>
                                            <th className="text-left py-4 px-4 font-medium text-[#434655]">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#e7e8e9]">
                                        {recentTasks.map((task, index) => (
                                            <tr
                                                key={index}
                                                className="hover:bg-[#f8f9fa]"
                                            >
                                                <td className="py-5 px-4 font-medium text-[#191c1d]">
                                                    {task.title}
                                                </td>
                                                <td className="py-5 px-4 text-[#434655]">
                                                    {task.category}
                                                </td>
                                                <td className="py-5 px-4 font-medium text-[#191c1d]">
                                                    {task.budget}
                                                </td>
                                                <td className="py-5 px-4 text-[#434655]">
                                                    {task.deadline}
                                                </td>
                                                <td className="py-5 px-4">
                                                    <span
                                                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                                                            task.status ===
                                                            "Completed"
                                                                ? "bg-emerald-100 text-emerald-700"
                                                                : task.status ===
                                                                    "In Progress"
                                                                  ? "bg-blue-100 text-blue-700"
                                                                  : "bg-amber-100 text-amber-700"
                                                        }`}
                                                    >
                                                        {task.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Need a new expert? */}
                        <Card className="bg-[#004ac6] text-white rounded-3xl p-8">
                            <h3 className="text-2xl font-semibold mb-3">
                                Need a new expert?
                            </h3>
                            <p className="text-blue-100 mb-8">
                                Post your task and get proposals from top
                                freelancers instantly.
                            </p>
                            <Button
                                as={Link}
                                href="/post-task"
                                className="w-full bg-white text-[#004ac6] hover:bg-gray-100 font-semibold rounded-2xl py-6"
                            >
                                Post a Task Now
                            </Button>
                        </Card>

                        {/* Recent Activity */}
                        <Card className="border border-[#e7e8e9] rounded-3xl p-8 bg-white">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold text-[#191c1d]">
                                    Recent Activity
                                </h3>
                                <Link
                                    href="/activity"
                                    className="text-[#2563eb] text-sm hover:underline"
                                >
                                    View All Activity
                                </Link>
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 shrink-0 flex items-center justify-center">
                                        📄
                                    </div>
                                    <div className="text-sm">
                                        <p className="text-[#191c1d]">
                                            New proposal received for{" "}
                                            <span className="font-medium">
                                                &quot;Redesign Landing
                                                Page&quot;
                                            </span>
                                        </p>
                                        <p className="text-[#737686] mt-1">
                                            2 hours ago
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 shrink-0 flex items-center justify-center">
                                        ✅
                                    </div>
                                    <div className="text-sm">
                                        <p className="text-[#191c1d]">
                                            Task{" "}
                                            <span className="font-medium">
                                                &quot;Write Technical
                                                Documentation&quot;
                                            </span>{" "}
                                            marked as Completed
                                        </p>
                                        <p className="text-[#737686] mt-1">
                                            Yesterday
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-purple-100 shrink-0 flex items-center justify-center">
                                        💬
                                    </div>
                                    <div className="text-sm">
                                        <p className="text-[#191c1d]">
                                            <span className="font-medium">
                                                Alex M.
                                            </span>{" "}
                                            sent a message regarding{" "}
                                            <span className="font-medium">
                                                &quot;Develop API
                                                Integration&quot;
                                            </span>
                                        </p>
                                        <p className="text-[#737686] mt-1">
                                            2 days ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
