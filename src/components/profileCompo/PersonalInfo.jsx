import React from "react";
import { User, Mail, Phone, Calendar } from "lucide-react";

const PersonalInfo = ({ profile, isEditing, onChange }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5 md:p-6">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Personal Information
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Your personal details and contact information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Full Name */}
        <div className="min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>

          <div className="relative">
            <User
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={onChange}
              disabled={!isEditing}
              className="w-full min-w-0 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>

        {/* Email */}
        <div className="min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={onChange}
              disabled={!isEditing}
              className="w-full min-w-0 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={onChange}
              disabled={!isEditing}
              className="w-full min-w-0 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>

          <div className="relative">
            <Calendar
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="date"
              name="dateOfBirth"
              value={profile.dateOfBirth}
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

export default PersonalInfo;