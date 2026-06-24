import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-[#e7e8e9] pt-16 pb-4">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center">
                            <span className="text-3xl font-bold text-[#2563eb]">
                                SkillSwap
                            </span>
                        </Link>
                        <p className="mt-4 text-[#434655] leading-relaxed max-w-md">
                            The trusted marketplace connecting businesses with
                            skilled freelancers globally.
                        </p>
                    </div>

                    {/* Platform */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-[#191c1d] mb-4">
                            Platform
                        </h3>
                        <ul className="space-y-3 text-[#434655]">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-[#191c1d] transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tasks"
                                    className="hover:text-[#191c1d] transition-colors"
                                >
                                    Browse Tasks
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/freelancers"
                                    className="hover:text-[#191c1d] transition-colors"
                                >
                                    Browse Freelancers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-[#191c1d] mb-4">
                            Account
                        </h3>
                        <ul className="space-y-3 text-[#434655]">
                            <li>
                                <Link
                                    href="/login"
                                    className="hover:text-[#191c1d] transition-colors"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/register"
                                    className="hover:text-[#191c1d] transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="md:col-span-3">
                        <h3 className="font-semibold text-[#191c1d] mb-4">
                            Social
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-2xl border border-[#e7e8e9] flex items-center justify-center hover:bg-[#f8f9fa] transition-colors"
                            >
                                <FaXTwitter className="w-5 h-5 text-[#191c1d]" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-2xl border border-[#e7e8e9] flex items-center justify-center hover:bg-[#f8f9fa] transition-colors"
                            >
                                <FaLinkedin className="w-5 h-5 text-[#191c1d]" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-2xl border border-[#e7e8e9] flex items-center justify-center hover:bg-[#f8f9fa] transition-colors"
                            >
                                <FaGithub className="w-5 h-5 text-[#191c1d]" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 pt-4 border-t border-[#e7e8e9] flex flex-col md:flex-row justify-between items-center text-sm text-[#737686]">
                    <p>© 2024 SkillSwap Marketplace. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-[#191c1d]">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-[#191c1d]">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
