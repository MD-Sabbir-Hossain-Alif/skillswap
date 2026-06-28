import RegisterPage from "@/components/Auth/Register";
import React, { Suspense } from "react";

const Register = () => {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    Loading...
                </div>
            }
        >
            <RegisterPage />
        </Suspense>
    );
};

export default Register;
