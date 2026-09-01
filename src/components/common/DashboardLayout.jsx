import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-full flex overflow-hidden">

      {/* ================= MOBILE OVERLAY ================= */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed lg:static
          top-0 left-0
          z-50
          h-screen
          w-[70%] max-w-xs lg:w-64
          shrink-0
          bg-white
          transition-transform duration-300 ease-in-out
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </aside>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex-1 min-w-0 flex flex-col h-screen">

        {/* ================= TOPBAR ================= */}
        <div className="h-16 shrink-0 border-b bg-white z-30">
          <Topbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <main
          className="
            flex-1
            min-w-0
            overflow-y-auto
            overflow-x-hidden
            bg-gray-100
            p-3
            sm:p-4
            md:p-6
            lg:p-6
          "
        >
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;