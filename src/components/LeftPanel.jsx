import {
  Users,
  UserCheck,
  UserMinus,
  CalendarDays,
  BarChart3,
  Settings,
  ClipboardList,
  Home,
} from "lucide-react";

const LeftPanel = () => {
  return (
    <div className="hidden lg:flex relative bg-gradient-to-br from-blue-50 to-blue-100 p-10 overflow-hidden">

      {/* Decorative Circles */}
      <div className="absolute w-24 h-24 bg-blue-200 rounded-full opacity-20 top-10 right-12"></div>
      <div className="absolute w-16 h-16 bg-blue-300 rounded-full opacity-20 bottom-40 left-8"></div>
      <div className="absolute w-40 h-40 bg-blue-200 rounded-full opacity-10 -bottom-16 right-0"></div>

      <div className="w-full flex flex-col justify-between">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-4">

            <div className="bg-white rounded-full shadow-lg p-3">
              <img
                src="/images/logo.jpeg"
                alt="logo"
                className="w-14 h-14"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Noteswift
              </h1>

              <p className="text-blue-600">
                Attendance Management
              </p>
            </div>

          </div>

          <h2 className="text-5xl font-bold text-blue-900 mt-16 leading-tight">
            Smarter Attendance,
            <br />
            Better Productivity
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            Manage, track and analyze attendance
            effortlessly with Noteswift.
          </p>
        </div>

        {/* Dashboard */}
        <div className="mt-10 bg-white rounded-3xl shadow-xl p-6">

          <div className="flex">

            {/* Sidebar */}
            <div className="w-16 bg-blue-700 rounded-2xl text-white flex flex-col items-center py-5 gap-5">

              <Home size={20} />
              <Users size={20} />
              <CalendarDays size={20} />
              <ClipboardList size={20} />
              <BarChart3 size={20} />
              <Settings size={20} />

            </div>

            {/* Dashboard Content */}
            <div className="flex-1 pl-5">

              {/* Cards */}
              <div className="grid grid-cols-4 gap-3">

                <div className="bg-gray-50 rounded-xl p-3 shadow-sm">
                  <Users className="text-blue-600" />
                  <p className="text-xs mt-2">Employees</p>
                  <h3 className="font-bold text-xl">248</h3>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 shadow-sm">
                  <UserCheck className="text-green-600" />
                  <p className="text-xs mt-2">Present</p>
                  <h3 className="font-bold text-xl">186</h3>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 shadow-sm">
                  <CalendarDays className="text-orange-500" />
                  <p className="text-xs mt-2">Leave</p>
                  <h3 className="font-bold text-xl">12</h3>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 shadow-sm">
                  <UserMinus className="text-red-500" />
                  <p className="text-xs mt-2">Absent</p>
                  <h3 className="font-bold text-xl">50</h3>
                </div>

              </div>

              {/* Graph */}
              <div className="mt-6 bg-gray-50 rounded-2xl p-5">

                <div className="flex justify-between">
                  <h4 className="font-semibold">
                    Attendance Overview
                  </h4>

                  <button className="text-sm border rounded-lg px-3 py-1">
                    This Month
                  </button>
                </div>

                <div className="h-48 mt-6 flex items-end justify-between">

                  {[40,70,60,120,90,150,130,180].map((h,index)=>(
                    <div
                      key={index}
                      className="bg-blue-600 rounded-t-md w-6"
                      style={{height:`${h}px`}}
                    ></div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LeftPanel;