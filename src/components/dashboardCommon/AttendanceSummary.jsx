import { getDashboardStats } from "../../Data/dashboardStats";


const AttendanceSummary = ({summary}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold mb-6">
        Attendance Summary
      </h2>

      <div className="flex justify-center mb-8">
        <div className="relative w-40 h-40">
          <div className="w-40 h-40 rounded-full border-[18px] border-blue-100"></div>

          <div
            className="absolute top-0 left-0 w-40 h-40 rounded-full border-[18px] border-transparent border-t-blue-600 border-r-blue-600 rotate-45"
          ></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold text-blue-600">{summary?.totalEmployees}</h2>
            <p className="text-gray-500 text-sm">Employees</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span>Present</span>
          </div>

          <span className="font-semibold">{summary?.presentToday}</span>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-400"></span>
            <span>On Leave</span>
          </div>

          <span className="font-semibold">{summary?.onLeave}</span>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span>Absent</span>
          </div>

          <span className="font-semibold">{summary?.absentToday}</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSummary;