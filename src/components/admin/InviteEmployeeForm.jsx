import InputField from "./InputField";
import SelectField from "./SelectField";

const InviteEmployeeForm = () => {
  return (
    <div className="mt-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <InputField
          label="Email Address"
          placeholder="Enter employee email"
          type="email"
        />

        <SelectField
          label="Department"
          options={[
            "HR",
            "IT",
            "Finance",
            "Marketing",
            "Sales",
          ]}
        />

        <InputField
          label="Designation"
          placeholder="Enter designation"
        />

        <InputField
          label="Phone Number"
          placeholder="+977 98XXXXXXXX"
        />

        <SelectField
          label="Role"
          options={[
            "Employee",
            "Manager",
            "Admin",
          ]}
        />

        <InputField
          label="Full Name"
          placeholder="Enter employee name"
        />

      </div>

      <div className="flex justify-end gap-4 mt-10">

        <button
          className="
            px-8
            py-3
            rounded-xl
            border
            border-gray-300
            hover:bg-gray-100
            transition
          "
        >
          Cancel
        </button>

        <button
          className="
            px-8
            py-3
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-semibold
            transition
          "
        >
          Invite Employee
        </button>

      </div>

    </div>
  );
};

export default InviteEmployeeForm;