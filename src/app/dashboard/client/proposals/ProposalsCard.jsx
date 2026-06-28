"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Badge } from "@heroui/react";
import { Clock } from "lucide-react";
import { updateProposal } from "@/lib/action/proposal";

// const proposalsData = [
//     {
//         taskId: "6a3be009ca203471fe5cdc27",
//         taskTitle: "Develop an E-commerce Mobile Application",
//         proposals: [
//             {
//                 _id: "6a3e8ede3aa716c1d23dc75a",
//                 freelancerName: "Freelancer1",
//                 freelancerEmail: "freelancer1@gmail.com",
//                 userImage: "https://i.pravatar.cc/64?u=f1",
//                 status: "pending",
//                 budget: "400",
//                 estimatedDay: "12",
//                 coverNote:
//                     "We are looking for an experienced frontend developer to create a modern, responsive, and high-performance e-commerce landing page.",
//                 submittedAt: "2026-06-26T14:38:22.601Z",
//             },
//             {
//                 _id: "6a3e8ede3aa716c1d23dc75b",
//                 freelancerName: "Alex Rivera",
//                 freelancerEmail: "alex.r@gmail.com",
//                 userImage: "https://i.pravatar.cc/64?u=alex",
//                 status: "pending",
//                 budget: "650",
//                 estimatedDay: "18",
//                 coverNote:
//                     "I have 5+ years experience building React Native apps with clean architecture and excellent performance.",
//                 submittedAt: "2026-06-26T15:12:45.601Z",
//             },
//         ],
//     },
//     {
//         taskId: "6a3be009ca203471fe5cdc28",
//         taskTitle: "Redesign Company Website Landing Page",
//         proposals: [
//             {
//                 _id: "6a3e8ede3aa716c1d23dc75c",
//                 freelancerName: "Sarah Chen",
//                 freelancerEmail: "sarah.design@gmail.com",
//                 userImage: "https://i.pravatar.cc/64?u=sarah",
//                 status: "accepted",
//                 budget: "850",
//                 estimatedDay: "7",
//                 coverNote:
//                     "I specialize in modern, conversion-focused landing page designs with strong UI/UX principles.",
//                 submittedAt: "2026-06-25T10:22:15.601Z",
//             },
//         ],
//     },
//     {
//         taskId: "6a3be009ca203471fe5cdc29",
//         taskTitle: "Build REST API for Inventory Management",
//         proposals: [
//             {
//                 _id: "6a3e8ede3aa716c1d23dc75d",
//                 freelancerName: "Michael Torres",
//                 freelancerEmail: "mike.dev@gmail.com",
//                 userImage: "https://i.pravatar.cc/64?u=mike",
//                 status: "pending",
//                 budget: "1200",
//                 estimatedDay: "14",
//                 coverNote:
//                     "Experienced Node.js developer with strong background in building scalable REST APIs using Express and PostgreSQL.",
//                 submittedAt: "2026-06-26T09:45:12.601Z",
//             },
//             {
//                 _id: "6a3e8ede3aa716c1d23dc75e",
//                 freelancerName: "Priya Sharma",
//                 freelancerEmail: "priya.code@gmail.com",
//                 userImage: "https://i.pravatar.cc/64?u=priya",
//                 status: "pending",
//                 budget: "950",
//                 estimatedDay: "10",
//                 coverNote:
//                     "I can deliver a clean, well-documented API with proper authentication and error handling.",
//                 submittedAt: "2026-06-26T11:30:55.601Z",
//             },
//         ],
//     },
// ];

const ProposalsCard = ({ proposalsData }) => {
    const [proposals, setProposals] = useState(proposalsData);
    const [expandedTasks, setExpandedTasks] = useState({});
    const router = useRouter();

    const toggleTask = (taskId) => {
        setExpandedTasks((prev) => ({
            ...prev,
            [taskId]: !prev[taskId],
        }));
    };

    // const handleAccept = (taskId, proposalId) => {
    //     if (!confirm("Accept this proposal and proceed to payment?")) return;

    //     setProposals((prev) =>
    //         prev.map((task) => {
    //             if (task.taskId === taskId) {
    //                 return {
    //                     ...task,
    //                     proposals: task.proposals.map((p) =>
    //                         p._id === proposalId
    //                             ? { ...p, status: "accepted" }
    //                             : { ...p, status: "rejected" },
    //                     ),
    //                 };
    //             }
    //             return task;
    //         }),
    //     );
    //     alert("Proposal accepted successfully!");
    // };

    const handleReject = async (proposalId) => {
        if (!confirm("Reject this proposal?")) return;

        const res = updateProposal(proposalId, { status: "rejected" });
        console.log(res);
    };
    return (
        <>
            {proposals.length === 0 ? (
                <Card className="p-6 text-center border border-[#e7e8e9] rounded-3xl bg-white">
                    <p className="text-xl text-[#737686]">
                        No proposals received yet.
                    </p>
                    <p className="text-[#434655] mt-2">
                        Share your tasks to get applications!
                    </p>
                </Card>
            ) : (
                <div className="space-y-3">
                    {proposals.map((task) => {
                        const isExpanded = expandedTasks[task.taskId] !== false;
                        const hasAccepted = task.proposals.some(
                            (p) => p.status === "accepted",
                        );

                        return (
                            <Card
                                key={task.taskId}
                                className="border border-[#e7e8e9] rounded-3xl bg-white overflow-hidden"
                            >
                                {/* Task Header */}
                                <div
                                    onClick={() => toggleTask(task.taskId)}
                                    className="px-6 py-5 border-b border-[#e7e8e9] flex items-center justify-between cursor-pointer hover:bg-[#f8f9fa]"
                                >
                                    <div>
                                        <h2 className="font-semibold text-xl text-[#191c1d]">
                                            {task.taskTitle}
                                        </h2>
                                        <p className="text-sm text-[#737686] mt-1">
                                            {task.proposals.length} proposal(s)
                                            received
                                        </p>
                                    </div>
                                    <span className="text-2xl">
                                        {isExpanded ? "−" : "+"}
                                    </span>
                                </div>

                                {/* Proposals List */}
                                {isExpanded && (
                                    <div className="divide-y divide-[#e7e8e9] space-y-2">
                                        {task.proposals.map((proposal) => (
                                            <div
                                                key={proposal._id}
                                                className="p-4 hover:bg-[#f8f9fa] transition-colors border border-blue-400 rounded-2xl"
                                            >
                                                <div className="flex flex-col md:flex-row gap-6">
                                                    {/* Freelancer */}
                                                    <div className="flex items-center gap-4 shrink-0">
                                                        <img
                                                            src={
                                                                proposal.userImage ||
                                                                "https://i.pravatar.cc/48?u=default"
                                                            }
                                                            alt={
                                                                proposal.freelancerName
                                                            }
                                                            className="w-12 h-12 rounded-full object-cover"
                                                        />
                                                        <div>
                                                            <div className="font-medium text-[#191c1d]">
                                                                {
                                                                    proposal.freelancerName
                                                                }
                                                            </div>
                                                            <div className="text-xs text-[#737686]">
                                                                {
                                                                    proposal.freelancerEmail
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Details */}
                                                    <div className="flex-1">
                                                        <div className="flex flex-wrap gap-6 text-sm mb-3">
                                                            <div>
                                                                <span className="text-[#737686]">
                                                                    Budget:
                                                                </span>{" "}
                                                                <span className="font-semibold text-emerald-600">
                                                                    $
                                                                    {
                                                                        proposal.budget
                                                                    }
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="text-[#737686] flex gap-1">
                                                                    Delivery:
                                                                    <span className="font-medium flex items-center gap-1">
                                                                        <Clock className="w-4 h-4" />{" "}
                                                                        {
                                                                            proposal.estimatedDay
                                                                        }{" "}
                                                                        days
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <p className="text-[#434655] text-[15px] line-clamp-2">
                                                            {proposal.coverNote}
                                                        </p>
                                                    </div>

                                                    {/* Status & Actions */}
                                                    <div className="flex flex-col items-end justify-between gap-4 md:w-44">
                                                        <span
                                                            className={`px-5 py-1.5 rounded-full text-sm font-medium ${
                                                                proposal.status ===
                                                                "accepted"
                                                                    ? "bg-emerald-100 text-emerald-700"
                                                                    : proposal.status ===
                                                                        "rejected"
                                                                      ? "bg-red-100 text-red-700"
                                                                      : "bg-amber-100 text-amber-700"
                                                            }`}
                                                        >
                                                            {proposal.status
                                                                .charAt(0)
                                                                .toUpperCase() +
                                                                proposal.status.slice(
                                                                    1,
                                                                )}
                                                        </span>

                                                        {proposal.status ===
                                                            "pending" &&
                                                            !hasAccepted && (
                                                                <div className="flex gap-2">
                                                                    <form
                                                                        action="/api/checkout_sessions"
                                                                        method="POST"
                                                                    >
                                                                        <section>
                                                                            <input
                                                                                type="hidden"
                                                                                name="proposalId"
                                                                                value={
                                                                                    proposal._id
                                                                                }
                                                                            />
                                                                            <Button
                                                                                type="submit"
                                                                                role="link"
                                                                                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                                                                            >
                                                                                Accept
                                                                            </Button>
                                                                        </section>
                                                                    </form>
                                                                    {/* <Button
                                                                        size="sm"
                                                                        onClick={() =>
                                                                            handleCheckout(
                                                                                task.taskId,
                                                                                task.taskTitle,
                                                                                proposal.budget,
                                                                            )
                                                                        }
                                                                        className="bg-emerald-600 hover:bg-emerald-700 text-white"
                                                                    >
                                                                        Accept
                                                                    </Button> */}
                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline"
                                                                        onClick={() =>
                                                                            handleReject(
                                                                                task.taskId,
                                                                                proposal._id,
                                                                            )
                                                                        }
                                                                        className="border-red-300 text-red-600 hover:bg-red-50"
                                                                    >
                                                                        Reject
                                                                    </Button>
                                                                </div>
                                                            )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Card>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default ProposalsCard;
