import Link from "next/link";
import { Card, Badge } from "@heroui/react";
import { Clock } from "lucide-react";

const tasks = [
    {
        id: 1,
        category: "Development",
        budget: "$500 - $800",
        title: "Build a React Dashboard for Analytics Data",
        description:
            "Need an experienced frontend developer to create a responsive dashboard using React and Tailwind CSS. Data will be fetched via REST API.",
        poster: "Sarah J.",
        avatar: "https://i.pravatar.cc/32?u=sarah",
        due: "Due in 3 days",
    },
    {
        id: 2,
        category: "Design",
        budget: "$300 Fixed",
        title: "Brand Identity for Coffee Shop Startup",
        description:
            "Looking for a minimalist, modern logo and basic brand guidelines for a new specialty coffee shop opening in downtown Seattle.",
        poster: "Mike T.",
        avatar: "https://i.pravatar.cc/32?u=mike",
        due: "Due in 1 week",
    },
    {
        id: 3,
        category: "Writing",
        budget: "$50 / hr",
        title: "Technical Documentation for Python Library",
        description:
            "Seeking a technical writer with Python experience to improve the documentation of our open-source data processing library.",
        poster: "DataTech Inc.",
        avatar: "https://i.pravatar.cc/32?u=datatech",
        due: "Ongoing",
    },
];

export default function LatestTasks() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-screen-2xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                    <div>
                        <h2 className="text-4xl font-bold text-[#191c1d]">
                            Latest Open Tasks
                        </h2>
                        <p className="text-[#434655] mt-2 text-lg">
                            Find the perfect project to showcase your skills.
                        </p>
                    </div>
                    <Link
                        href="/tasks"
                        className="text-[#2563eb] hover:underline font-medium flex items-center gap-1 mt-4 md:mt-0"
                    >
                        View All →
                    </Link>
                </div>

                {/* Tasks Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {tasks.map((task) => (
                        <Card
                            key={task.id}
                            className="border border-[#e7e8e9] rounded-3xl hover:shadow-md transition-all hover:-translate-y-1 bg-white overflow-hidden"
                        >
                            <Card.Header className="pb-4">
                                <div className="flex justify-between items-center">
                                    <Badge
                                        variant="secondary"
                                        className="bg-[#eef4ff] text-[#004ac6] px-3 py-1 rounded-full text-sm font-medium top-5 right-10"
                                    >
                                        {task.category}
                                    </Badge>
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
                    ))}
                </div>
            </div>
        </section>
    );
}
