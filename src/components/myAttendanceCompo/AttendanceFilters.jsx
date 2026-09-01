import React from "react";
import { Search, CalendarDays, RotateCcw } from "lucide-react";

const AttendanceFilters = ({
  search,
  setSearch,
  month,
  setMonth,
  status,
  setStatus,
  onReset,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
      <div className="flex flex-col xl:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search attendance..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50"
          />
        </div>

        {/* Month */}
        <div className="relative xl:w-64">
          <CalendarDays
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50"
          />
        </div>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="xl:w-56 px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-50 bg-white"
        >
          <option value="All">All Status</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
          <option value="Late">Late</option>
        </select>

        {/* Reset */}
        <button
          type="button"
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>
    </div>
  );
};

export default AttendanceFilters;