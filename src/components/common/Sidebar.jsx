import { LogOut } from 'lucide-react';
import { menus } from '../../Data/menu';
import { NavLink } from "react-router-dom";


const Sidebar = () => {

  const menuItems = menus["admin"];

  return (
    <aside className="w-72 bg-white border-r flex flex-col justify-between">

      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 p-6 border-b">
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

        {/* Menu */}

        <div className="px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                  key={item.label}
                  to={item.path}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${item.active
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                    

              </NavLink>
            );
          })}
        </div>
      </div>


      {/* Bottom */}
      <div className="border-t p-5">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100"
            alt="Admin"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="font-semibold">Admin</h3>
            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 text-red-500 mt-6 hover:text-red-600">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;