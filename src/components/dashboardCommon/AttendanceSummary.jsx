import { getDashboardStats } from "../../Data/statsCards";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const AttendanceSummary = ({ summary }) => {

  const pieData = [
  {
    name: "Present",
    value: summary?.presentToday || 0,
    color: "#22c55e",
  },
  {
    name: "Late",
    value: summary?.lateToday || 0,
    color: "#f59e0b",
  },
  {
    name: "Leave",
    value: summary?.onLeave || 0,
    color: "#3b82f6",
  },
  {
    name: "Absent",
    value: summary?.absentToday || 0,
    color: "#ef4444",
  },
];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold mb-6">
        Attendance Summary
      </h2>

      <div className="flex justify-center mb-8">
        <div className="relative w-40 h-40">
          <div className="relative w-52 h-52 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={80}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={entry.color}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-blue-600">
                {summary?.totalEmployees}
              </h2>

              <p className="text-gray-500 text-sm">
                Employees
              </p>
            </div>
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