import { Bell, UserCircle2, ChevronDown } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center mb-10">

      <h1 className="text-4xl font-bold">
        Admin
      </h1>

      <div className="flex items-center gap-6">

        <div className="relative">

          <Bell size={28} />

          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>

        </div>

        <div className="flex items-center gap-3">

          <UserCircle2
            size={42}
            className="text-gray-400"
          />

          <span className="font-semibold">
            Admin
          </span>

          <ChevronDown size={18} />

        </div>

      </div>

    </div>
  );
};

export default Topbar;