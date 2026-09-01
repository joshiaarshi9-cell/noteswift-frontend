import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LeaveRequestPagination = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between gap-3 mt-5 px-1 sm:px-0">
      {/* Page Info */}
      <p className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
        Page {currentPage} of {totalPages}
      </p>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className="
            w-9 h-9
            flex items-center justify-center
            border border-gray-200
            rounded-lg
            text-gray-500
            hover:bg-indigo-50
            hover:text-indigo-600
            hover:border-indigo-200
            transition
            disabled:opacity-40
            disabled:cursor-not-allowed
            disabled:hover:bg-transparent
            disabled:hover:text-gray-500
            disabled:hover:border-gray-200
          "
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className="
            w-9 h-9
            flex items-center justify-center
            border border-gray-200
            rounded-lg
            text-gray-500
            hover:bg-indigo-50
            hover:text-indigo-600
            hover:border-indigo-200
            transition
            disabled:opacity-40
            disabled:cursor-not-allowed
            disabled:hover:bg-transparent
            disabled:hover:text-gray-500
            disabled:hover:border-gray-200
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default LeaveRequestPagination;