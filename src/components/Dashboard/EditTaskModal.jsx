"use client";
import { updateTask } from "@/lib/action/tasks";
import {
    Modal,
    Button,
    TextField,
    Label,
    Input,
    Select,
    ListBox,
    TextArea,
    toast,
    useOverlayState,
} from "@heroui/react";
import { Edit } from "lucide-react";

import { useRouter } from "next/navigation";

export default function EditTaskModal({ task }) {
    const router = useRouter();
    const state = useOverlayState({
        defaultOpen: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // console.log(data, task._id);

        const res = await updateTask(task._id, data);
        // console.log("Task Updated:", res);

        if (res) {
            toast.success("Task Updated successfully!");
            router.refresh();
            state.close();
        }
    };
    return (
        <Modal state={state}>
            <Button
                variant="outline"
                className="rounded-full bg-[#2563eb] text-white hover:bg-[#1e53d0] px-3 py-1"
            >
                <Edit className="w-4 h-4" />
                Edit
            </Button>
            <Modal.Backdrop>
                <Modal.Container className="max-w-5xl">
                    <Modal.Dialog>
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading className="text-center text-xl font-bold">
                                Update Task
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="max-h-[80vh] overflow-y-auto p-2">
                            <form onSubmit={handleSubmit} className="space-y-2">
                                {/* Task Title */}
                                <TextField defaultValue={task.title} isRequired>
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
                                <div className="grid md:grid-cols-2 gap-2 items-center">
                                    <div>
                                        <Label
                                            isRequired
                                            className="text-sm text-[#434655] font-medium mb-2 block"
                                        >
                                            Category
                                        </Label>

                                        <Select
                                            name="category"
                                            defaultValue={task.category}
                                        >
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

                                    <TextField defaultValue={task.skills}>
                                        <Label className="text-sm text-[#434655] font-medium">
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
                                <TextField
                                    defaultValue={task.description}
                                    isRequired
                                >
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
                                    <TextField
                                        defaultValue={task.budget}
                                        isRequired
                                    >
                                        <Label className="text-base text-[#434655] font-medium">
                                            Budget (USD)
                                        </Label>
                                        <Input
                                            name="budget"
                                            type="text"
                                            placeholder="500"
                                            className="h-10 rounded-2xl border border-[#cfcfcf]"
                                        />
                                    </TextField>

                                    <TextField
                                        defaultValue={task.deadline}
                                        isRequired
                                    >
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
                                <div className="flex justify-end gap-4 pt-2 ">
                                    {/* <Button
                                        type="reset"
                                        variant="outline"
                                        className="rounded-2xl px-8"
                                    >
                                        Reset
                                    </Button> */}
                                    <Button
                                        type="submit"
                                        className="rounded-2xl bg-[#2563eb] hover:bg-[#1e53d0] px-10 flex items-center gap-2"
                                    >
                                        Update Task
                                    </Button>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
