import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AttendancePagination = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 bg-white">
      <p className="text-sm text-gray-500">
        Page{" "}
        <span className="font-medium text-gray-700">
          {currentPage}
        </span>{" "}
        of{" "}
        <span className="font-medium text-gray-700">
          {totalPages}
        </span>
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          <ChevronLeft size={17} />
        </button>

        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  );
};

export default AttendancePagination;