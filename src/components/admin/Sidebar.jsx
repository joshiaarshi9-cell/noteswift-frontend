import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Building2,
  BarChart3,
  Settings,
  LogOut,
  UserCircle2,
} from "lucide-react";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    icon: Users,
    label: "Employees",
    active: true,
  },
  {
    icon: Calendar,
    label: "Attendance",
  },
  {
    icon: FileText,
    label: "Leaves",
  },
  {
    icon: Building2,
    label: "Departments",
  },
  {
    icon: BarChart3,
    label: "Reports",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 bg-white border-r flex flex-col justify-between">

      {/* Logo */}

      <div>

        <div className="flex items-center gap-4 p-8">

          <img
            src="/images/logo.jpeg"
            alt="logo"
            className="w-16 h-16 rounded-full border"
          />

          <div>
            <h1 className="text-3xl font-bold">
              Noteswift
            </h1>

            <p className="text-gray-500">
              Attendance Management
            </p>

          </div>

        </div>

        {/* Menu */}

        <div className="px-5 mt-6 space-y-3">

          {menuItems.map((item, index) => {

            const Icon = item.icon;

            return (

              <button
                key={index}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition
                ${
                  item.active
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >

                <Icon size={22} />

                <span className="text-lg">
                  {item.label}
                </span>

              </button>

            );
          })}

        </div>

      </div>

      {/* Bottom */}

      <div className="p-6">

        <div className="border rounded-2xl p-4 flex justify-between items-center">

          <div className="flex gap-3 items-center">

            <UserCircle2
              className="text-blue-600"
              size={45}
            />

            <div>

              <h3 className="font-semibold">
                Admin
              </h3>

              <p className="text-sm text-gray-500">
                Administrator
              </p>

            </div>

          </div>

        </div>

        <button className="flex items-center gap-3 mt-8 text-gray-700">

          <LogOut />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;