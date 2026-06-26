"use client";

import { deleteTask } from "@/lib/action/tasks";
import { Button, Modal, toast } from "@heroui/react";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export function DeleteTaskModal({ task }) {
    const router = useRouter();
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
            <Button variant="danger" className="rounded-full px-3 py-1">
                <Trash className="w-4 h-4" />
                Delete
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-90">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className=" mx-auto bg-red-600 text-white">
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
                                onClick={handleDelete}
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
