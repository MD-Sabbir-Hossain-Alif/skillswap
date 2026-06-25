import TaskCard from "@/components/Dashboard/TaskCard";
import { getClientTaskById } from "@/lib/api/tasks";
import { getUserSession } from "@/lib/core/session";

const page = async () => {
    const user = await getUserSession();
    // console.log(user);
    const mytasks = await getClientTaskById(user.id);
    // console.log(mytasks);
    return (
        <div className="max-w-screen-2xl mx-auto py-6 px-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-4">
                <div>
                    <h2 className="text-4xl font-bold text-[#191c1d]">
                        My Tasks
                    </h2>
                    <p className="text-[#434655] mt-2 text-lg">
                        Find the perfect project to showcase your skills.
                    </p>
                </div>
            </div>

            {/* Tasks Grid */}
            <div className="grid md:grid-cols-3 gap-6">
                {mytasks.map((task) => (
                    <TaskCard task={task} key={task._id}></TaskCard>
                ))}
            </div>
        </div>
    );
};

export default page;
