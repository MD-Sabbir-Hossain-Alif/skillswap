import TaskCard from "@/components/Dashboard/TaskCard";
import { getTasks } from "@/lib/api/tasks";
import Link from "next/link";

const AllTasksPage = async () => {
    const allTask = await getTasks();
    // console.log(allTask);
    return (
        <div className="max-w-screen-2xl mx-auto py-6 px-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
                <div>
                    <h2 className="text-4xl font-bold text-[#191c1d]">
                        All Task
                    </h2>
                    <p className="text-[#434655] mt-2 text-lg">
                        Find the perfect project to showcase your skills.
                    </p>
                </div>
            </div>

            {/* Tasks Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {allTask.map((task) => (
                    <TaskCard task={task} key={task._id}></TaskCard>
                ))}
            </div>
        </div>
    );
};

export default AllTasksPage;
