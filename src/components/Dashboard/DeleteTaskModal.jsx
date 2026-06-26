"use client";

import { deleteTask } from "@/lib/action/tasks";
import { Button, Modal } from "@heroui/react";
import { Trash } from "lucide-react";

export function DeleteTaskModal({ task }) {
    const handleDelete = async () => {
        const res = await deleteTask(task._id);
        // console.log("Task Deleted:", res);

        if (res) {
            toast.success("Task Deleted successfully!");
            router.refresh();
        }
    };
    return (
        <Modal>
            <Button variant="danger-soft" className="rounded-2xl px-4 py-1">
                <Trash className="w-4 h-4" />
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-90">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className=" mx-auto bg-default text-red-500">
                                <Trash className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading className="text-red-500 text-center font-bold">
                                Are You Sure?
                            </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                If you delete{" "}
                                <span className="text-black font-bold">
                                    {task.title}
                                </span>
                                , it will be gone forever. This action cannot be
                                undone.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant="danger"
                                className="w-full"
                                slot="close"
                            >
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
