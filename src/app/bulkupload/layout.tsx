import { SideMenu } from "@/components/component/sideManu/slide-manu";

export default function DashboardMainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-[#F9F9F9]">
            <SideMenu />
            <div className="flex-1 flex flex-col">
                {/* <notificationNavbar /> */}
                {children}
            </div>
        </div>
    );
}