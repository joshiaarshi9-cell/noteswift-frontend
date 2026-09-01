import React from "react";
import { MapPin, Home, Globe } from "lucide-react";

const ProfileInfo = ({ profile, isEditing, onChange }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5 md:p-6">
      <div className="mb-5 sm:mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Contact & Address
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Your address and location details
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {/* Address */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>

          <div className="relative">
            <Home
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />

            <textarea
              name="address"
              value={profile.address}
              onChange={onChange}
              disabled={!isEditing}
              rows={3}
              placeholder="Enter your address"
              className="w-full min-w-0 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none resize-none focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>

        {/* City */}
        <div className="min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>

          <div className="relative">
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="city"
              value={profile.city}
              onChange={onChange}
              disabled={!isEditing}
              placeholder="Enter city"
              className="w-full min-w-0 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>

        {/* Country */}
        <div className="min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>

          <div className="relative">
            <Globe
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              name="country"
              value={profile.country}
              onChange={onChange}
              disabled={!isEditing}
              placeholder="Enter country"
              className="w-full min-w-0 pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;