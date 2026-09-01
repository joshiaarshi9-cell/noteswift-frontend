import React from "react";
import {
  Briefcase,
  Building2,
  UserRound,
  CalendarDays,
} from "lucide-react";

const ProfessionalInfo = ({ profile, isEditing, onChange }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5 md:p-6">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Professional Information
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Your work and employment details
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Employee ID */}
        <div className="min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Employee ID
          </label>

          <div className="relative">
            <UserRound
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="employeeId"
              value={profile.employeeId}
              onChange={onChange}
              disabled={!isEditing}
              className="w-full min-w-0 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>

        {/* Designation */}
        <div className="min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Designation
          </label>

          <div className="relative">
            <Briefcase
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="designation"
              value={profile.designation}
              onChange={onChange}
              disabled={!isEditing}
              className="w-full min-w-0 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>

        {/* Department */}
        <div className="min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>

          <div className="relative">
            <Building2
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="department"
              value={profile.department}
              onChange={onChange}
              disabled={!isEditing}
              className="w-full min-w-0 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>

        {/* Joining Date */}
        <div className="min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Joining Date
          </label>

          <div className="relative">
            <CalendarDays
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="date"
              name="joiningDate"
              value={profile.joiningDate}
              onChange={onChange}
              disabled={!isEditing}
              className="w-full min-w-0 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInfo;