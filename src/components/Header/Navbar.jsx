"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Spinner } from "@heroui/react";
import { Avatar } from "@heroui/react";
import { authClient, useSession } from "@/lib/auth-client";
import NavLink from "./NavLink";
import { MdLogout } from "react-icons/md";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session, isPending } = useSession();
    // console.log(session);
    const user = session?.user;

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#e7e8e9] bg-white/80 backdrop-blur-lg">
            <div className="max-w-screen-2xl mx-auto">
                <header className="flex h-16 items-center justify-between px-4">
                    {/* Logo */}
                    <div className="flex-1 flex items-center">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold text-[#2563eb]">
                                SkillSwap
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-4">
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/tasks">Browse Tasks</NavLink>
                        </li>
                        <li>
                            <NavLink href="/freelancers">
                                Browse Freelancers
                            </NavLink>
                        </li>
                    </ul>

                    {/* Right Side - Desktop */}
                    <div className="flex-1 hidden md:flex items-center justify-end gap-3">
                        {isPending ? (
                            <Spinner />
                        ) : user ? (
                            <>
                                <NavLink href={`/dashboard/${user.role}`}>
                                    Dashboard
                                </NavLink>
                                <h3>{user.name}</h3>
                                {/* User Avatar (shown when logged in) */}
                                <div className="w-8 h-8 rounded-full bg-[#e7e8e9] flex items-center justify-center cursor-pointer hover:bg-[#d9dadb] transition-colors ml-2">
                                    <Avatar color="accent">
                                        <Avatar.Image
                                            alt="John Doe"
                                            src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                        />
                                        <Avatar.Fallback>AC</Avatar.Fallback>
                                    </Avatar>
                                </div>
                                <span>
                                    <Button
                                        variant="danger"
                                        className="rounded-full px-3 py-1 rotate-180"
                                        onClick={async () => {
                                            await authClient.signOut();
                                            window.location.reload();
                                        }}
                                    >
                                        <MdLogout />
                                    </Button>
                                </span>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}
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
