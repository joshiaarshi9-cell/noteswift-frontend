import React from "react";
import { Search } from "lucide-react";

const LeaveRequestFilters = ({
  search,
  setSearch,
  status,
  setStatus,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 sm:p-4 mb-5">
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4">

        {/* Search */}
        <div className="relative flex-1 min-w-0">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search leave type or reason..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              pl-10
              pr-4
              py-2.5
              border border-gray-200
              rounded-lg
              text-sm
              text-gray-700
              placeholder:text-gray-400
              outline-none
              focus:border-indigo-500
              focus:ring-2
              focus:ring-indigo-100
              transition
            "
          />
        </div>

        {/* Status Filter */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="
            w-full
            md:w-48
            px-4
            py-2.5
            border border-gray-200
            rounded-lg
            text-sm
            text-gray-600
            bg-white
            outline-none
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-100
            transition
          "
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

      </div>
    </div>
  );
};

export default LeaveRequestFilters;