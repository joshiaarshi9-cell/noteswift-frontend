import React from "react";
import { Plus } from "lucide-react";

const LeaveRequestHeader = ({ onApplyLeave }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-7">
      
      {/* Heading */}
      <div className="min-w-0">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Leave Request
        </h1>

        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Manage and track your leave requests
        </p>
      </div>

      {/* Apply Leave Button */}
      <button
        onClick={onApplyLeave}
        className="
          w-full sm:w-auto
          flex items-center justify-center gap-2
          bg-indigo-600
          hover:bg-indigo-700
          text-white
          px-5
          py-2.5
          rounded-lg
          text-sm
          font-medium
          transition
          shadow-sm
        "
      >
        <Plus size={18} />
        Apply Leave
      </button>

    </div>
  );
};

export default LeaveRequestHeader;