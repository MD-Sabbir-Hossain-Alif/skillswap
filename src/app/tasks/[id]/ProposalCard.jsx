"use client";
import Link from "next/link";
import { useState } from "react";
import {
    Button,
    Card,
    Input,
    TextArea,
    Label,
    TextField,
    toast,
} from "@heroui/react";
import { useSession } from "@/lib/auth-client";
import { createProposal } from "@/lib/action/proposal";
import { redirect } from "next/navigation";

const ProposalCard = ({ task }) => {
    const [hasApplied, setHasApplied] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { data: session } = useSession();
    // console.log(session);
    const user = session?.user;
    // console.log(user);

    const isLogin = user?.role === "freelancer";
    // console.log(isLogin);

    const handleSubmitProposal = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const payload = {
            taskId: task._id,
            freelancerName: user.name,
            freelancerEmail: user.email,
            userId: user.id,
            userImage: user.image,
            status: "pending",
            ...data,
        };

        // console.log(payload);
        const res = await createProposal(payload);
        // console.log("Proposal Posted:", res);

        if (res.insertedId) {
            console.log("Proposal Posted:", res.insertedId);
            toast.success("✅ Proposal submitted successfully!");
            e.target.reset();
            setTimeout(() => {
                setHasApplied(true);
                setIsSubmitting(false);
                redirect("/dashboard/freelancer/tasks");
            }, 1000);
        }
    };

    return (
        <>
            <Card className="sticky top-8 border border-[#e7e8e9] rounded-3xl bg-white p-8">
                <h2 className="text-2xl font-semibold">Submit Your Proposal</h2>
                <p className="text-[#737686] mb-2">
                    Propose your terms for this project.
                </p>

                {isLogin ? (
                    !hasApplied ? (
                        <form
                            onSubmit={handleSubmitProposal}
                            className="space-y-3"
                        >
                            <TextField>
                                <Label>Proposed Budget ($)</Label>
                                <Input
                                    name="budget"
                                    type="number"
                                    placeholder="e.g. 6000"
                                    className="rounded-2xl border border-gray-300"
                                    required
                                />
                            </TextField>

                            <TextField>
                                <Label>Estimated Delivery (Days)</Label>
                                <Input
                                    name="estimatedDay"
                                    type="number"
                                    placeholder="e.g. 40"
                                    className="rounded-2xl border border-gray-300"
                                    required
                                />
                            </TextField>

                            <TextField>
                                <Label>Cover Note</Label>
                                <TextArea
                                    name="coverNote"
                                    placeholder="Highlight why you're the best fit for this task..."
                                    className="min-h-15 rounded-3xl border border-gray-300"
                                    required
                                />
                            </TextField>

                            <Button
                                type="submit"
                                fullWidth
                                isPending={isSubmitting}
                                className="h-14 rounded-2xl bg-[#2563eb] hover:bg-[#1e53d0] text-white font-semibold text-lg"
                            >
                                {isSubmitting
                                    ? "Submitting..."
                                    : "Send Proposal →"}
                            </Button>
                        </form>
                    ) : (
                        <div className="text-center py-12">
                            <div className="text-emerald-600 text-5xl mb-4">
                                🎉
                            </div>
                            <p className="font-semibold text-lg">
                                You have already applied for this task.
                            </p>
                        </div>
                    )
                ) : (
                    <div className="text-center py-12">
                        <div className="text-emerald-600 text-5xl mb-4">❌</div>
                        <p className="font-semibold text-lg">
                            Login as freelancer to submit proposal.
                        </p>
                    </div>
                )}

                <div className="text-center mt-2 text-sm text-[#737686]">
                    Don&apos;t have a freelancer account?{" "}
                    <Link
                        href="/register"
                        className="text-[#004ac6] hover:underline"
                    >
                        Log in as Freelancer
                    </Link>
                </div>
            </Card>
        </>
    );
};

export default ProposalCard;
