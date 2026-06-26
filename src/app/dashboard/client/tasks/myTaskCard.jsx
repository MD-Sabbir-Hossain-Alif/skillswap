import { DeleteTaskModal } from "@/components/Dashboard/DeleteTaskModal";
import EditTaskModal from "@/components/Dashboard/EditTaskModal";
import { getUserSession } from "@/lib/core/session";
import { Avatar, Button, Card } from "@heroui/react";
import { Code, Delete, Edit, Trash } from "lucide-react";
import Link from "next/link";

const MyTaskCard = async ({ task }) => {
    // const {_id, category, budget, title, description, image, due} = task
    const user = await getUserSession();
    // console.log(user);

    const deadline = new Date(task.deadline);
    const today = new Date();

    const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));

    const due =
        daysLeft > 0
            ? `${daysLeft} days left`
            : daysLeft === 0
              ? "Due today"
              : `${Math.abs(daysLeft)} days overdue`;

    // console.log(due);

    const url = user ? `/tasks/${task._id}` : "/login";
    // console.log(url);
    return (
        <Card
            key={task._id}
            className="border border-[#e7e8e9] hover:border-blue-400 rounded-3xl hover:shadow-md transition-all hover:-translate-y-1 bg-white overflow-hidden"
        >
            <Link href={url}>
                <Card.Header className="pb-4">
                    <div className="flex justify-between items-center">
                        <span
                            variant="secondary"
                            className="bg-[#eef4ff] text-[#004ac6] px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {task.category}
                        </span>
                        <span className="font-semibold text-[#191c1d]">
                            $ {task.budget}
                        </span>
                    </div>
                </Card.Header>

                <Card.Content className="space-y-4 pb-6">
                    <Card.Title className="text-xl font-semibold leading-tight text-[#191c1d] line-clamp-1">
                        {task.title}
                    </Card.Title>

                    <p className="text-[#434655] text-[15px] line-clamp-3">
                        {task.description}
                    </p>
                </Card.Content>
            </Link>

            <Card.Footer className="pt-4 border-t border-[#e7e8e9] flex items-center justify-between">
                <div className="flex items-center gap-1.5">Proposal(0)</div>

                <div className="flex items-center gap-3">
                    <EditTaskModal task={task} />
                    <DeleteTaskModal task={task} />
                </div>
            </Card.Footer>
        </Card>
    );
};

export default MyTaskCard;
