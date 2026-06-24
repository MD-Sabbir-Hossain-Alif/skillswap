import { Card } from "@heroui/react";
import { Clock } from "lucide-react";

const TaskCard = ({ task }) => {
    // const {_id, category, budget, title, description, image, due} = task
    return (
        <Card
            key={task._id}
            className="border border-[#e7e8e9] rounded-3xl hover:shadow-md transition-all hover:-translate-y-1 bg-white overflow-hidden"
        >
            <Card.Header className="pb-4">
                <div className="flex justify-between items-center">
                    <span
                        variant="secondary"
                        className="bg-[#eef4ff] text-[#004ac6] px-3 py-1 rounded-full text-sm font-medium"
                    >
                        {task.category}
                    </span>
                    <span className="font-semibold text-[#191c1d]">
                        {task.budget}
                    </span>
                </div>
            </Card.Header>

            <Card.Content className="space-y-4 pb-6">
                <Card.Title className="text-xl font-semibold leading-tight text-[#191c1d]">
                    {task.title}
                </Card.Title>

                <p className="text-[#434655] text-[15px] line-clamp-3">
                    {task.description}
                </p>
            </Card.Content>

            <Card.Footer className="pt-4 border-t border-[#e7e8e9] flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src={task.avatar}
                        alt={task.poster}
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium text-[#191c1d]">
                        {task.poster}
                    </span>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-[#737686]">
                    <Clock className="w-4 h-4" />
                    {task.due}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default TaskCard;
