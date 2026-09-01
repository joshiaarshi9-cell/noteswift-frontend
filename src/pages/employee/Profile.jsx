import React, { useState } from "react";
import ProfileHeader from "../../components/profileCompo/ProfileHeader";
import PersonalInfo from "../../components/profileCompo/PersonalInfo";
import ProfessionalInfo from "../../components/profileCompo/ProfessionalInfo";
import ProfileInfo from "../../components/profileCompo/ProfileInfo";
import { Save, X } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Aarshi",
    email: "joshiaarshi9@gmail.com",
    phone: "9871420414",
    dateOfBirth: "",
    employeeId: "HR-006",
    designation: "Full Stack Developer",
    department: "Human Resources",
    joiningDate: "2026-08-23",
    address: "",
    city: "",
    country: "India",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full min-w-0 bg-gray-100">
      {/* Profile Header */}
      <ProfileHeader onEdit={handleEdit} />

      {/* Profile Information */}
      <div className="mt-4 sm:mt-5 md:mt-6 space-y-4 sm:space-y-5 md:space-y-6">
        <PersonalInfo
          profile={profile}
          isEditing={isEditing}
          onChange={handleChange}
        />

        <ProfessionalInfo
          profile={profile}
          isEditing={isEditing}
          onChange={handleChange}
        />

        <ProfileInfo
          profile={profile}
          isEditing={isEditing}
          onChange={handleChange}
        />
      </div>

      {/* Action Buttons */}
      {isEditing && (
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 mt-4 sm:mt-6 pb-5 sm:pb-6">
          <button
            type="button"
            onClick={handleCancel}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
          >
            <X size={17} />
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-sm font-medium text-white transition"
          >
            <Save size={17} />
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;