import React from "react";
import { CalendarDays } from "lucide-react";

const MyAttendanceHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          My Attendance
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Track your attendance and working hours
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2.5 rounded-lg border border-gray-100 shadow-sm">
        <CalendarDays size={18} className="text-blue-600" />
        <span>August 2026</span>
      </div>
    </div>
  );
};

export default MyAttendanceHeader;