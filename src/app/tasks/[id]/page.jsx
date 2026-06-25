import Link from "next/link";
import { Avatar, Card } from "@heroui/react";
import { UserCheck, DollarSign, Calendar } from "lucide-react";
import ProposalCard from "./ProposalCard";
import { getTaskById } from "@/lib/api/tasks";

export default async function TaskDetailPage({ params }) {
    const { id } = await params;
    // console.log(id);

    const {
        category,
        status,
        userName,
        userImage,
        title,
        skills,
        description,
        budget,
        deadline,
    } = await getTaskById(id);
    // console.log(res);

    const today = new Date();
    const daysLeft = Math.ceil(
        (new Date(deadline) - today) / (1000 * 60 * 60 * 24),
    );

    const due =
        daysLeft > 0
            ? `${daysLeft} days left`
            : daysLeft === 0
              ? "Due today"
              : `${Math.abs(daysLeft)} days overdue`;

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
            {/* Navbar - Add your Navbar component here */}
            {/* <Navbar /> */}

            <div className="max-w-screen mx-auto px-6 pt-8 pb-16">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-[#737686] mb-6">
                    <Link href="/" className="hover:text-[#191c1d]">
                        Home
                    </Link>
                    <span>›</span>
                    <Link href="/tasks" className="hover:text-[#191c1d]">
                        Browse Tasks
                    </Link>
                    <span>›</span>
                    <span className="text-[#191c1d] font-medium">{title}</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                    {/* LEFT COLUMN - Task Information */}
                    <div className="lg:col-span-8">
                        {/* Task Header Card */}
                        <Card className="p-8 border border-[#e7e8e9] rounded-3xl bg-white mb-8">
                            <div className="flex gap-3 ">
                                <span className="bg-[#eef4ff] text-[#004ac6] px-4 py-1 rounded-full">
                                    {category}
                                </span>
                                <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full flex items-center gap-1">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    {status}
                                </span>
                            </div>

                            <h1 className="text-4xl font-bold text-[#191c1d] leading-tight">
                                {title}
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#e7e8e9]">
                                {/* Client */}
                                <div className="flex items-center gap-4">
                                    <Avatar color="accent">
                                        <Avatar.Image
                                            alt="John Doe"
                                            src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                        />
                                        <Avatar.Fallback>AC</Avatar.Fallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold">
                                            {userName}
                                        </div>
                                        <div className="flex items-center gap-1 text-emerald-600 text-sm">
                                            <UserCheck className="w-4 h-4" />{" "}
                                            Verified Client
                                        </div>
                                    </div>
                                </div>

                                {/* Budget */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                        <DollarSign className="w-7 h-7 text-[#004ac6]" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-2xl text-[#191c1d]">
                                            {budget}
                                        </div>
                                        <div className="text-sm text-[#737686]">
                                            Fixed Budget
                                        </div>
                                    </div>
                                </div>

                                {/* Deadline */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                                        <Calendar className="w-7 h-7 text-amber-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-2xl text-[#191c1d]">
                                            {due}
                                        </div>
                                        <div className="text-sm text-[#737686]">
                                            Deadline
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Project Description */}
                        <Card className="p-8 border border-[#e7e8e9] rounded-3xl bg-white">
                            <h2 className="text-2xl font-semibold mb-3">
                                Project Description
                            </h2>
                            <div className="prose text-[#434655] leading-relaxed">
                                <p>{description}</p>
                            </div>

                            {/* Required Skills */}
                            <div className="mt-4">
                                <h3 className="font-semibold mb-4">
                                    Required Skills
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills}
                                    {/* {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="bg-[#f1f3f5] text-[#434655] px-4 py-2 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))} */}
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* RIGHT COLUMN - Proposal Form */}
                    <div className="lg:col-span-4">
                        <ProposalCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
