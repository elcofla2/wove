import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardTopBar } from "@/components/DashboardTopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#FAFAFA] font-sans">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardTopBar />
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
