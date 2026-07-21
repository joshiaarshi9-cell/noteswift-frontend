import { Bell, ChevronDown } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Admin</h1>
        <p className="text-gray-500">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-6">

        <button className="relative">
          <Bell size={24} />

          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/40"
            alt="admin"
            className="h-10 w-10 rounded-full"
          />

          <div>
            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

          <ChevronDown size={18} />

        </div>

      </div>
    </div>
  );
};

export default Topbar;