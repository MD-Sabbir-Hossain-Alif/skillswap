"use client";

import { useState } from "react";
import {
    Button,
    Card,
    Input,
    Label,
    TextField,
    TextArea,
    Select,
    ListBox,
} from "@heroui/react";
import { ShieldCheck } from "lucide-react";
import { toast } from "@heroui/react";
import { createTask } from "@/lib/action/tasks";
import { redirect } from "next/navigation";

export default function PostTaskForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const payload = {
            ...data,
            category: "other",
            status: "open",
        };

        const res = await createTask(payload);
        // console.log("Task Posted:", res);

        if (res.insertedId) {
            console.log("Task Posted:", res.insertedId);
            toast.success("Task published successfully!");
            e.target.reset();
            setTimeout(() => {
                redirect("/dashboard/client/tasks");
            }, 2000);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] py-6">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-[#191c1d]">
                        Post a New Task
                    </h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Main Form - 2/3 */}
                    <div className="lg:col-span-8">
                        <Card className="p-8 border border-[#e7e8e9] rounded-3xl bg-white">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Task Title */}
                                <TextField isRequired>
                                    <Label className="text-base text-[#434655] font-medium">
                                        Task Title
                                    </Label>
                                    <Input
                                        name="title"
                                        placeholder="e.g., Design a minimalist landing page for SaaS"
                                        className="h-10 rounded-2xl border border-[#cfcfcf]"
                                    />
                                </TextField>

                                {/* Category & Skills */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label
                                            isRequired
                                            className="text-base text-[#434655] font-medium mb-2 block"
                                        >
                                            Category
                                        </Label>

                                        <Select name="category">
                                            <Select.Trigger className="h-10 rounded-2xl border border-[#cfcfcf]">
                                                <Select.Value placeholder="Select a category" />
                                                <Select.Indicator />
                                            </Select.Trigger>

                                            <Select.Popover>
                                                <ListBox>
                                                    <ListBox.Item id="Development">
                                                        Development
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Design">
                                                        Design
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Writing">
                                                        Writing
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Marketing">
                                                        Marketing
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Video">
                                                        Video
                                                    </ListBox.Item>
                                                    <ListBox.Item id="Other">
                                                        Other
                                                    </ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                    </div>

                                    <TextField>
                                        <Label className="text-base text-[#434655] font-medium">
                                            Required Skills (Optional)
                                        </Label>
                                        <Input
                                            name="skills"
                                            placeholder="e.g., Figma, React, Copywriting"
                                            className="h-10 rounded-2xl border border-[#cfcfcf]"
                                        />
                                    </TextField>
                                </div>

                                {/* Description */}
                                <TextField isRequired>
                                    <Label className="text-base text-[#434655] font-medium">
                                        Description
                                    </Label>

                                    <TextArea
                                        name="description"
                                        placeholder="Describe the project scope, deliverables, and any specific requirements in detail..."
                                        className="min-h-20 rounded-3xl border border-[#cfcfcf]"
                                    />
                                </TextField>

                                {/* Budget & Deadline */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <TextField isRequired>
                                        <Label className="text-base text-[#434655] font-medium">
                                            Budget (USD)
                                        </Label>
                                        <Input
                                            name="budget"
                                            type="text"
                                            placeholder="$ 500"
                                            className="h-10 rounded-2xl border border-[#cfcfcf]"
                                        />
                                    </TextField>

                                    <TextField isRequired>
                                        <Label className="text-base text-[#434655] font-medium">
                                            Deadline
                                        </Label>
                                        <Input
                                            name="deadline"
                                            type="date"
                                            className="h-10 rounded-2xl border border-[#cfcfcf]"
                                        />
                                    </TextField>
                                </div>

                                {/* Actions */}
                                <div className="flex justify-end gap-4 pt-6 ">
                                    <Button
                                        type="reset"
                                        variant="outline"
                                        className="rounded-2xl px-8"
                                    >
                                        Reset
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="rounded-2xl bg-[#2563eb] hover:bg-[#1e53d0] px-10 flex items-center gap-2"
                                    >
                                        Publish Task
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    </div>

                    {/* Sidebar - 1/3 */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Tips for Success */}
                        <Card className="p-6 border border-[#e7e8e9] rounded-3xl bg-white">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-2xl flex items-center justify-center text-xl">
                                    💡
                                </div>
                                <h3 className="font-semibold text-lg text-[#191c1d]">
                                    Tips for Success
                                </h3>
                            </div>

                            <ul className="space-y-4 text-[#434655] text-[15px]">
                                <li className="flex gap-3">
                                    <span className="text-emerald-600 mt-0.5">
                                        ✓
                                    </span>
                                    <span>
                                        <strong>Be specific:</strong> Clear
                                        requirements lead to more accurate
                                        proposals and better final results.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-emerald-600 mt-0.5">
                                        ✓
                                    </span>
                                    <span>
                                        <strong>Set realistic budgets:</strong>{" "}
                                        Research standard rates for the required
                                        skills to attract top talent.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-emerald-600 mt-0.5">
                                        ✓
                                    </span>
                                    <span>
                                        <strong>Attach examples:</strong> If you
                                        have a specific style in mind, mention
                                        it or plan to share files later.
                                    </span>
                                </li>
                            </ul>
                        </Card>

                        {/* Secure Payments */}
                        <Card className="p-6 border border-[#e7e8e9] rounded-3xl bg-white">
                            <div className="flex items-center gap-3 mb-2">
                                <ShieldCheck className="w-8 h-8 text-emerald-600" />
                                <h3 className="font-semibold text-lg text-[#191c1d]">
                                    Secure Payments
                                </h3>
                            </div>
                            <p className="text-[#434655]">
                                Funds are held safely until you approve the
                                completed work.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
