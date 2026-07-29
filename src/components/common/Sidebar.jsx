import { LogOut, X } from "lucide-react";
import { menus } from "../../Data/menu";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ closeSidebar }) => {
  const { user } = useAuth();

  const menuItems = menus[user?.role] || [];

  return (
    <div className="h-full bg-white border-r flex flex-col">

      {/* Logo */}
      <div className="flex items-center justify-between p-6 border-b shrink-0">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.jpeg"
            alt="Noteswift"
            className="w-12 h-12 rounded-xl"
          />

          <div>
            <h2 className="text-xl font-bold">Noteswift</h2>
            <p className="text-xs text-gray-500">
              Attendance System
            </p>
          </div>
        </div>

        <button
          onClick={closeSidebar}
          className="lg:hidden"
        >
          <X size={24} />
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t p-4 shrink-0">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="Admin"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="font-semibold">
              {user?.fullName || "Admin"}
            </h3>

            <p className="text-sm text-gray-500 capitalize">
              {user?.role || "Administrator"}
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 text-red-500 mt-6 hover:text-red-600">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;