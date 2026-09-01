import React from "react";
import { Camera, Edit } from "lucide-react";

const ProfileHeader = ({ onEdit }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        {/* Profile Details */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div className="relative shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
              <span className="text-xl sm:text-2xl font-semibold text-indigo-600">
                AJ
              </span>
            </div>

            <button
              type="button"
              className="absolute bottom-0 right-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center border-2 border-white"
            >
              <Camera size={13} className="sm:hidden" />
              <Camera size={14} className="hidden sm:block" />
            </button>
          </div>

          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
              Aarshista Joshi
            </h1>

            <p className="text-sm text-gray-500 mt-1 truncate">
              Software Engineer
            </p>

            <p className="text-xs sm:text-sm text-gray-400 mt-1 truncate">
              Engineering Department
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={onEdit}
          type="button"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          <Edit size={17} />
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;