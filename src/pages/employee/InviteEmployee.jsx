import InputField from "../../components/common/InputField";
import SelectField from "../../components/common/SelectField";

const InviteEmployee = () => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-[36px] font-bold text-gray-900">
          Invite your Employee
        </h2>

        <p className="mt-2 text-gray-500 text-lg">
          Fill the employee details below.
        </p>
      </div>

      <form className="grid grid-cols-2 gap-x-8 gap-y-7">

        {/* Email */}
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter employee email"
        />

        {/* Department */}
        <SelectField
          label="Department"
          options={[
            "HR",
            "Development",
            "Design",
            "Marketing",
            "Sales",
          ]}
        />

        {/* Designation */}
        <InputField
          label="Designation"
          placeholder="Software Engineer"
        />

        {/* Phone */}
        <InputField
          label="Phone Number"
          type="tel"
          placeholder="+977 98XXXXXXXX"
        />

        {/* Role */}
        <SelectField
          label="Role"
          options={[
            "Admin",
            "Manager",
            "Employee",
          ]}
        />

        {/* Full Name */}
        <InputField
          label="Full Name"
          placeholder="John Doe"
        />

        {/* Buttons */}
        <div className="col-span-2 flex justify-end gap-5 pt-6">

          <button
            type="button"
            className="px-10 py-3 border border-blue-600 rounded-xl text-blue-600 font-semibold hover:bg-blue-50 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-10 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-md transition"
          >
            Invite Employee
          </button>

        </div>

      </form>
    </>
  );
};

export default InviteEmployee;