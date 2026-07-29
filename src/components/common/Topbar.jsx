import {
  Search,
  CalendarDays,
  Bell,
  Menu,
  X,
} from "lucide-react";

const Topbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between gap-4">

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden mr-3"
        >
          {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Search */}
        <div className="relative w-full max-w-sm">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Calendar */}
          <button className="text-gray-500 hover:text-blue-600 transition">
            <CalendarDays size={22} />
          </button>

          {/* Notification */}
          <button className="relative text-gray-500 hover:text-blue-600 transition">
            <Bell size={22} />

            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
              1
            </span>
          </button>

          {/* Divider */}
          <div className="h-10 w-px bg-gray-200" />

          {/* Profile */}
          <button className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
              className="w-11 h-11 rounded-full object-cover"
            />

            <div className="text-left hidden md:block">
              <h4 className="font-semibold text-gray-800">
                Admin
              </h4>

              <p className="text-sm text-gray-500">
                Administrator
              </p>
            </div>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Topbar;