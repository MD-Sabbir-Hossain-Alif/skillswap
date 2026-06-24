"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Card, Input, Label, TextField, Link } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/dashboard";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const { error: signInError } = await authClient.signIn.email({
                email: formData.email,
                password: formData.password,
            });

            if (signInError) {
                setError(signInError.message || "Invalid email or password");
            } else {
                router.push(redirectTo);
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[85vh] bg-[#f8f9fa] flex items-center justify-center py-8 px-4">
            <Card className="w-full max-w-md bg-white shadow-xl border border-[#e7e8e9] rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="pt-4 pb-3 px-6 text-center">
                    <h1 className="text-3xl font-bold text-[#191c1d] tracking-tight">
                        Welcome back
                    </h1>
                    <p className="mt-2 text-[#434655] text-[17px]">
                        Sign in to SkillSwap to continue
                    </p>
                </div>

                <div className="px-6 pb-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        {/* Email */}
                        <TextField>
                            <Label className="text-[#434655] font-medium">
                                Email Address
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="h-8 rounded-2xl border-[#e7e8e9] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                            />
                        </TextField>

                        {/* Password */}
                        <TextField>
                            <div className="flex justify-between items-center">
                                <Label className="text-[#434655] font-medium">
                                    Password
                                </Label>
                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-[#004ac6] hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <Input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="h-8 rounded-2xl border-[#e7e8e9] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                            />
                        </TextField>

                        {/* Sign In Button */}
                        <Button
                            type="submit"
                            fullWidth
                            isPending={isLoading}
                            className="h-10 rounded-2xl bg-[#2563eb] hover:bg-[#1e53d0] text-white font-semibold text-base shadow-sm transition-all active:scale-[0.985]"
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-3">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#e7e8e9]"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-[#737686]">
                                OR CONTINUE WITH
                            </span>
                        </div>
                    </div>

                    {/* Google Sign In */}
                    <Button
                        variant="outline"
                        fullWidth
                        className="h-10 rounded-2xl border-[#e7e8e9] hover:bg-[#f8f9fa] flex items-center justify-center gap-3 text-[#191c1d]"
                        onClick={async () => {
                            await authClient.signIn.social({
                                provider: "google",
                                callbackURL: redirectTo,
                            });
                        }}
                    >
                        <img
                            src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Sign in with Google
                    </Button>

                    {/* Register Link */}
                    <div className="mt-3 text-center text-sm text-[#737686]">
                        Don&apos;t have an account?{" "}
                        <Link
                            href={`/register?redirect=${encodeURIComponent(redirectTo)}`}
                            className="text-[#004ac6] hover:underline font-medium"
                        >
                            Create account
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Login;
