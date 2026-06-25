"use client";

import { useState } from "react";
import { Button, Card, Input, Select, ListBox } from "@heroui/react";
import { Search, Filter, Star, Heart } from "lucide-react";

const freelancers = [
    {
        id: 1,
        name: "Elena Rodriguez",
        title: "Senior Frontend Engineer",
        avatar: "https://i.pravatar.cc/128?u=elena",
        skills: ["React", "TypeScript", "Tailwind"],
        rating: 4.9,
        jobs: 124,
        hourlyRate: 85,
        isOnline: true,
    },
    {
        id: 2,
        name: "David Chen",
        title: "Product Designer",
        avatar: "https://i.pravatar.cc/128?u=david",
        skills: ["Figma", "UX Research", "Prototyping"],
        rating: 5.0,
        jobs: 89,
        hourlyRate: 70,
        isOnline: true,
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        title: "Growth Marketer",
        avatar: "https://i.pravatar.cc/128?u=sarah",
        skills: ["SEO", "Google Ads", "Analytics"],
        rating: 4.8,
        jobs: 210,
        hourlyRate: 55,
        isOnline: true,
    },
    {
        id: 4,
        name: "Marcus Johnson",
        title: "Backend Systems Architect",
        avatar: "https://i.pravatar.cc/128?u=marcus",
        skills: ["Node.js", "PostgreSQL", "AWS"],
        rating: 4.9,
        jobs: 156,
        hourlyRate: 95,
        isOnline: false,
    },
];

export default function FreelancersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    const filteredFreelancers = freelancers.filter(
        (freelancer) =>
            freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            freelancer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            freelancer.skills.some((skill) =>
                skill.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
    );

    return (
        <div className="min-h-screen bg-[#f8f9fa] pb-12">
            <div className="max-w-screen-2xl mx-auto px-6 pt-10">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-[#191c1d]">
                        Browse Skilled Freelancers
                    </h1>
                    <p className="text-[#434655] mt-2 text-lg">
                        Find the perfect talent for your next project. Filter by
                        skills, ratings, and availability.
                    </p>
                </div>

                {/* Search & Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-10">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-3.5 w-5 h-5 text-[#737686]" />
                        <Input
                            placeholder="Search by name or skill..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-12 h-12 rounded-2xl border-[#e7e8e9]"
                        />
                    </div>

                    {/* Correct Select Anatomy */}
                    <Select
                        onChange={setSelectedCategory}
                        defaultValue="All Categories"
                    >
                        <Select.Trigger className="h-12 rounded-2xl border-[#e7e8e9] w-full md:w-64">
                            <Select.Value placeholder="All Categories" />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item value="All Categories">
                                    All Categories
                                </ListBox.Item>
                                <ListBox.Item value="Development">
                                    Development
                                </ListBox.Item>
                                <ListBox.Item value="Design">
                                    Design
                                </ListBox.Item>
                                <ListBox.Item value="Marketing">
                                    Marketing
                                </ListBox.Item>
                                <ListBox.Item value="Writing">
                                    Writing
                                </ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <Button
                        variant="outline"
                        className="h-12 rounded-2xl px-6 flex items-center gap-2 border-[#e7e8e9]"
                    >
                        <Filter className="w-5 h-5" />
                        Filters
                    </Button>
                </div>

                {/* Freelancers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredFreelancers.map((freelancer) => (
                        <Card
                            key={freelancer.id}
                            className="p-6 border border-[#e7e8e9] rounded-3xl bg-white hover:shadow-md transition-all group"
                        >
                            <div className="relative">
                                <div className="relative mx-auto w-20 h-20">
                                    <img
                                        src={freelancer.avatar}
                                        alt={freelancer.name}
                                        className="w-20 h-20 rounded-full object-cover ring-4 ring-white"
                                    />
                                    {freelancer.isOnline && (
                                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"></div>
                                    )}
                                </div>

                                <button className="absolute top-2 right-2 transition-colors">
                                    <Heart className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="text-center mt-4">
                                <h3 className="font-semibold text-xl text-[#191c1d]">
                                    {freelancer.name}
                                </h3>
                                <p className="text-[#434655] text-sm">
                                    {freelancer.title}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mt-3">
                                {freelancer.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs bg-[#f1f3f5] text-[#434655] px-3 py-1 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-2 pt-2 border-t border-[#e7e8e9]">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-medium">
                                        {freelancer.rating}
                                    </span>
                                    <span className="text-[#737686] text-sm">
                                        ({freelancer.jobs})
                                    </span>
                                </div>
                                <div className="font-semibold text-[#191c1d]">
                                    ${freelancer.hourlyRate}/hr
                                </div>
                            </div>

                            <Button className="w-full mt-2 rounded-2xl bg-white border border-[#e7e8e9] hover:bg-[#f8f9fa] text-[#191c1d] font-medium">
                                View Profile
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
