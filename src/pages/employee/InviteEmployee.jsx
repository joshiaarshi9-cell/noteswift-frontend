import { useState, useEffect } from "react";
import InputField from "../../components/common/InputField";
import SelectField from "../../components/common/SelectField";
import { getDepartments, sendInvitation } from "../../services/invitationServices";
import toast from "react-hot-toast";

const InviteEmployee = () => {

  const [departments, setDepartments] = useState([])
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    role: "Employee",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await sendInvitation(formData);

      toast.success(data.message);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        role: "employee",
      });

    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  const fetchDeparments = async () => {
    try {
      const data = await getDepartments();
      setDepartments(data.departments)
    } catch (err) {
      console.log(err.message)
    }

  }


  useEffect(() => {
    fetchDeparments();
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
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

      <form className="grid grid-cols-2 gap-x-8 gap-y-7"
        onSubmit={handleSubmit}
      >

        {/* Full Name */}
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
        />

        {/* Email */}
        {/* <InputField
          label="Employee ID"
          type="text"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          placeholder="Enter your employee ID"
        /> */}

        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter employee email"
        />

        {/* Department */}
        <SelectField
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          options={departments.map((department) => department.name)}
        />

        {/* Designation */}
        <InputField
          label="Designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          placeholder="Software Engineer"
        />

        {/* Phone */}
        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+977 98XXXXXXXX"
        />

        {/* Role */}
        <SelectField
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          options={[
            "admin",
            "hr",
            "employee",
          ]}
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