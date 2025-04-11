import React from "react";

import DesktopSidebar, { MobileSidebar } from "../../components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <MobileSidebar />
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

export default DashboardLayout;
