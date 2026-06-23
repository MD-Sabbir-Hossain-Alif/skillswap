"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { User } from "lucide-react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#e7e8e9] bg-white/80 backdrop-blur-lg">
            <div className="max-w-screen-2xl mx-auto">
                <header className="flex h-16 items-center justify-between px-6">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold text-[#004ac6]">
                                SkillSwap
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li>
                            <Link
                                href="/"
                                className="text-[#434655] hover:text-[#191c1d] transition-colors font-medium"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/tasks"
                                className="text-[#004ac6] font-semibold border-b-2 border-[#004ac6] pb-1 transition-colors"
                            >
                                Browse Tasks
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/freelancers"
                                className="text-[#434655] hover:text-[#191c1d] transition-colors font-medium"
                            >
                                Browse Freelancers
                            </Link>
                        </li>
                    </ul>

                    {/* Right Side - Desktop */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/login">
                            <Button
                                variant="outline"
                                className="rounded-2xl border-[#e7e8e9] text-[#191c1d] hover:bg-[#f8f9fa] font-medium"
                            >
                                Login
                            </Button>
                        </Link>

                        <Link href="/register">
                            <Button className="rounded-2xl bg-[#2563eb] hover:bg-[#1e53d0] text-white font-semibold">
                                Register
                            </Button>
                        </Link>

                        {/* User Avatar (shown when logged in) */}
                        <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center cursor-pointer hover:bg-[#d9dadb] transition-colors ml-2">
                            <User className="w-4 h-4 text-[#434655]" />
                            {/* Or use real image: <img src="/avatar.jpg" className="w-8 h-8 rounded-full" /> */}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#191c1d]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </header>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-[#e7e8e9] bg-white">
                        <ul className="flex flex-col py-4 px-6 space-y-4 text-[#434655]">
                            <li>
                                <Link
                                    href="/"
                                    className="block py-2 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tasks"
                                    className="block py-2 text-[#004ac6] font-semibold"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Browse Tasks
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/freelancers"
                                    className="block py-2 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Browse Freelancers
                                </Link>
                            </li>

                            <div className="pt-4 border-t border-[#e7e8e9] flex flex-col gap-3">
                                <Button
                                    as={Link}
                                    href="/login"
                                    variant="outline"
                                    className="rounded-2xl w-full"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </Button>
                                <Button
                                    as={Link}
                                    href="/register"
                                    className="rounded-2xl w-full bg-[#2563eb]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Register
                                </Button>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
