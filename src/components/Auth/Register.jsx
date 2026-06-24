"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Card, Input, Label, TextField, Link } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { Briefcase, Wrench, Check } from "lucide-react";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        image: "",
        password: "",
        role: "client", // "freelancer" = Find Work, "client" = Hire Talent
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/dashboard";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRoleSelect = (role) => {
        setFormData((prev) => ({ ...prev, role }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const { error: signUpError } = await authClient.signUp.email({
                name: formData.name,
                image: formData.image,
                email: formData.email,
                password: formData.password,
                role: formData.role,
            });

            if (signUpError) {
                setError(signUpError.message || "Failed to create account");
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
        <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center py-8 px-4">
            <Card className="w-full max-w-md bg-white shadow-xl border border-[#e7e8e9] rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="pt-4 pb-4 px-6 text-center">
                    <h1 className="text-3xl font-bold text-[#191c1d] tracking-tight">
                        Create an account
                    </h1>
                    {/* <p className="mt-3 text-[#434655] text-[17px]">
                        Join SkillSwap to connect with top talent and find great
                        projects.
                    </p> */}
                </div>

                <div className="px-6 pb-4">
                    <form onSubmit={handleSubmit} className="space-y-3">
                        {error && (
                            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl text-center">
                                {error}
                            </div>
                        )}

                        {/* Role Selection */}
                        <div>
                            <div className="grid grid-cols-2 gap-3">
                                {/* Hire Talent */}
                                <button
                                    type="button"
                                    onClick={() => handleRoleSelect("client")}
                                    className={`group relative flex flex-col items-center justify-center gap-2 border-2 rounded-2xl py-2 transition-all hover:shadow-md ${
                                        formData.role === "client"
                                            ? "border-[#004ac6] bg-[#eef4ff]"
                                            : "border-[#e7e8e9] hover:border-[#c3c6d7]"
                                    }`}
                                >
                                    <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                                        <Briefcase className="w-6 h-6 text-[#004ac6]" />
                                    </div>
                                    <span className="font-semibold text-[#191c1d]">
                                        Hire Talent
                                    </span>
                                    {formData.role === "client" && (
                                        <div className="absolute top-3 right-3 w-6 h-6 bg-[#004ac6] rounded-full flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </button>

                                {/* Find Work */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        handleRoleSelect("freelancer")
                                    }
                                    className={`group relative flex flex-col items-center justify-center gap-2 border-2 rounded-2xl py-2 transition-all hover:shadow-md ${
                                        formData.role === "freelancer"
                                            ? "border-[#004ac6] bg-[#eef4ff]"
                                            : "border-[#e7e8e9] hover:border-[#c3c6d7]"
                                    }`}
                                >
                                    <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                                        <Wrench className="w-6 h-6 text-[#004ac6]" />
                                    </div>
                                    <span className="font-semibold text-[#191c1d]">
                                        Find Work
                                    </span>
                                    {formData.role === "freelancer" && (
                                        <div className="absolute top-3 right-3 w-6 h-6 bg-[#004ac6] rounded-full flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Form Fields */}
                        <TextField>
                            <Label className="text-[#434655] font-medium">
                                Full Name
                            </Label>
                            <Input
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="h-8 rounded-2xl border-[#e7e8e9] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                            />
                        </TextField>

                        <TextField>
                            <Label className="text-[#434655] font-medium">
                                Image Url
                            </Label>
                            <Input
                                name="image"
                                placeholder="www.example-image.com"
                                value={formData.image}
                                onChange={handleChange}
                                className="h-8 rounded-2xl border-[#e7e8e9] focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb]"
                            />
                        </TextField>

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

                        <TextField>
                            <Label className="text-[#434655] font-medium">
                                Password
                            </Label>
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

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            fullWidth
                            isPending={isLoading}
                            className="h-10 rounded-2xl bg-[#2563eb] hover:bg-[#1e53d0] text-white font-semibold text-base shadow-sm transition-all active:scale-[0.985]"
                        >
                            {isLoading
                                ? "Creating account..."
                                : "Create Account"}
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

                    {/* Google Button */}
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
                        Sign up with Google
                    </Button>

                    {/* Footer Link */}
                    <div className="mt-3 text-center text-sm text-[#737686]">
                        Already have an account?{" "}
                        <Link
                            href={`/signin?redirect=${encodeURIComponent(redirectTo)}`}
                            className="text-[#004ac6] hover:underline font-medium"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Register;
