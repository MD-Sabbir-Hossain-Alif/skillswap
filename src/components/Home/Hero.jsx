"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Plus, Search } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-[#f8f9fa] pt-16 pb-20">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#191c1d]">
                            Get your tasks done by{" "}
                            <span className="text-[#2563eb]">
                                skilled freelancers
                            </span>
                        </h1>

                        <p className="text-xl text-[#434655] max-w-lg">
                            Connect with top-tier talent for your projects. From
                            quick fixes to long-term engagements, find the
                            perfect match on SkillSwap.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                as={Link}
                                href="/post-task"
                                className="h-14 px-8 rounded-2xl bg-[#2563eb] hover:bg-[#1e53d0] text-white font-semibold text-lg flex items-center gap-3 shadow-sm"
                            >
                                <Plus className="w-5 h-5" />
                                Post a Task
                            </Button>

                            <Button
                                as={Link}
                                href="/tasks"
                                variant="outline"
                                className="h-14 px-8 rounded-2xl border-[#e7e8e9] hover:bg-white text-[#191c1d] font-semibold text-lg flex items-center gap-3"
                            >
                                <Search className="w-5 h-5" />
                                Browse Tasks
                            </Button>
                        </div>

                        {/* Trust / Stats */}
                        <div className="pt-4 flex items-center gap-8 text-sm text-[#737686]">
                            <div>⭐️ Trusted by 12,000+ businesses</div>
                            <div>4.9/5 Average Rating</div>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-140 h-105">
                            <Image
                                src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6"
                                alt="Skilled freelancer working on computer"
                                fill
                                className="rounded-3xl shadow-2xl object-cover"
                            />

                            {/* Bottom Success Card */}
                            <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-white rounded-2xl shadow-xl p-5 max-w-70 border border-[#e7e8e9]">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-emerald-600 text-xl">
                                            ✓
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#191c1d]">
                                            Task Completed
                                        </p>
                                        <p className="text-[#434655] text-sm mt-1">
                                            Website Redesign MVP
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
