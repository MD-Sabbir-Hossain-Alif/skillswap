"use client";

import { useState } from "react";
import { Button, Card } from "@heroui/react";
import { Clock } from "lucide-react";
import { updateProposal } from "@/lib/action/proposal";

const ProposalsCard = ({ proposalsData }) => {
    const [expandedTasks, setExpandedTasks] = useState({});

    const toggleTask = (taskId) => {
        setExpandedTasks((prev) => ({
            ...prev,
            [taskId]: !prev[taskId],
        }));
    };

    const handleReject = async (proposalId) => {
        if (!confirm("Reject this proposal?")) return;

        const res = await updateProposal(proposalId, { status: "rejected" });
        console.log(res);
    };
    return (
        <>
            {proposalsData.length === 0 ? (
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
                    {proposalsData.map((task) => {
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

                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline"
                                                                        onClick={() =>
                                                                            handleReject(
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
