// import { getUserSession } from "@/lib/core/session";
import {
    IoMenuOutline,
    IoNotificationsOutline,
    IoBriefcaseOutline,
    IoMailOutline,
    IoSettingsOutline,
    IoHomeOutline,
    IoSearchOutline,
    IoPersonOutline,
    IoBookmarkOutline,
    IoDocumentTextOutline,
    IoCardOutline,
} from "react-icons/io5";
import { Button, Drawer } from "@heroui/react";
import { Building, Users } from "lucide-react";
import Link from "next/link";

export async function DashboardSidebar() {
    // const user = (await getUserSession());
    const user = undefined; // Replace with actual user session retrieval logic

    const clientNavLinks = [
        { icon: IoHomeOutline, href: "/dashboard/client", label: "Overview" },
        {
            icon: IoNotificationsOutline,
            href: "/dashboard/client/tasks/new",
            label: "Post a Task  ",
        },
        {
            icon: IoSearchOutline,
            href: "/dashboard/client/tasks",
            label: "My Tasks",
        },
        {
            icon: IoBriefcaseOutline,
            href: "freelancers",
            label: "Freelancers",
        },
        {
            icon: IoBookmarkOutline,
            href: "/dashboard/client/proposals",
            label: "Manage Proposals",
        },
        {
            icon: IoPersonOutline,
            href: "/dashboard/client/payments",
            label: "Payments",
        },
    ];

    const freelancerNavLinks = [
        {
            icon: IoHomeOutline,
            href: "/dashboard/freelancer",
            label: "Dashboard",
        },
        {
            icon: IoSearchOutline,
            href: "/dashboard/freelancer/tasks",
            label: "Tasks",
        },
        {
            icon: IoBookmarkOutline,
            href: "/dashboard/freelancer/saved-jobs",
            label: "Saved Jobs",
        },
        {
            icon: IoDocumentTextOutline,
            href: "/dashboard/freelancer/applications",
            label: "Applications",
        },
        {
            icon: IoCardOutline,
            href: "/dashboard/freelancer/billing",
            label: "Billing",
        },
        { icon: IoSettingsOutline, href: "/settings", label: "Settings" },
    ];

    const adminNavLinks = [
        { icon: IoHomeOutline, href: "/dashboard/admin", label: "Dashboard" },
        { icon: Users, href: "/dashboard/admin/users", label: "Users" },
        {
            icon: Building,
            href: "/dashboard/admin/companies",
            label: "Companies",
        },
        {
            icon: IoBriefcaseOutline,
            href: "/dashboard/admin/jobs",
            label: "Jobs",
        },
        {
            icon: IoCardOutline,
            href: "/dashboard/admin/payments",
            label: "Payments",
        },
        {
            icon: IoSettingsOutline,
            href: "/dashboard/admin/settings",
            label: "Settings",
        },
    ];

    const navLinksMap = {
        admin: adminNavLinks,
        freelancer: freelancerNavLinks, // Assuming freelancer has similar navigation to seeker
        client: clientNavLinks, // Assuming client has similar navigation to recruiter
    };

    const navItems = navLinksMap[user?.role || "client"];

    const navContent = (
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
                <Link
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    href={item.href}
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </Link>
            ))}
        </nav>
    );

    return (
        <>
            <aside className="hidden w-64 shrink-0 border-r border-default p-4 lg:block">
                {navContent}
            </aside>
            <Drawer>
                <Button className="lg:hidden" variant="secondary">
                    <IoMenuOutline />
                    Sidebar
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>{navContent}</Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
}
