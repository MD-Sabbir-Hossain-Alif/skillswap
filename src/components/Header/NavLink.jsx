"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathName = usePathname();

    let isActive = false;

    if (href === "/") {
        isActive = pathName === "/" || pathName.startsWith("/category/");
    } else {
        isActive = pathName === href;
    }

    return (
        <Link
            href={href}
            className={`transition-colors ${
                isActive
                    ? "text-[#004ac6] border-b-2 border-[#004ac6] pb-1 font-semibold"
                    : "text-[#434655] hover:text-[#191c1d] font-medium"
            }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
