import React from "react";
import {
  CalendarDays,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const LeaveRequestStats = ({ leaveRequests }) => {
  const pending = leaveRequests.filter(
    (request) => request.status === "Pending"
  ).length;

  const approved = leaveRequests.filter(
    (request) => request.status === "Approved"
  ).length;

  const rejected = leaveRequests.filter(
    (request) => request.status === "Rejected"
  ).length;

  const stats = [
    {
      title: "Total Leaves",
      value: "12",
      icon: CalendarDays,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      iconBg: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      title: "Approved",
      value: approved,
      icon: CheckCircle2,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Rejected",
      value: rejected,
      icon: XCircle,
      iconBg: "bg-red-50",
      iconColor: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-7">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-1">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`w-10 h-10 rounded-lg ${stat.iconBg} flex items-center justify-center`}
              >
                <Icon className={stat.iconColor} size={20} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeaveRequestStats;