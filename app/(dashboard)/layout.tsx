import React from "react";

import DesktopSidebar, { MobileSidebar } from "../../components/Sidebar";
import Navbar from "@/components/Navbar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      {/* <DesktopSidebar /> */}
      <Navbar />
      {/* <MobileSidebar /> */}
      <div className="flex flex-col p-4 mt-20">{children}</div>
    </div>
  );
}

export default DashboardLayout;
