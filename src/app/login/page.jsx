import Login from "@/components/Auth/Login";
import React, { Suspense } from "react";

const page = () => {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    Loading...
                </div>
            }
        >
            <Login />
        </Suspense>
    );
};

export default page;
