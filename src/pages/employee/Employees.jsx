import React, { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

const employees = [
  {
    id: "EMP001",
    name: "Aarav Sharma",
    email: "aarav@gmail.com",
    role: "Employee",
    department: "IT",
    designation: "Frontend Developer",
  },
  {
    id: "EMP002",
    name: "Priya Verma",
    email: "priya@gmail.com",
    role: "HR",
    department: "HR",
    designation: "HR Manager",
  },
  {
    id: "EMP003",
    name: "Rahul Singh",
    email: "rahul@gmail.com",
    role: "Employee",
    department: "IT",
    designation: "Backend Developer",
  },
  {
    id: "EMP004",
    name: "Neha Joshi",
    email: "neha@gmail.com",
    role: "Admin",
    department: "Administration",
    designation: "System Admin",
  },
];

const Employees = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const employeesPerPage = 3;

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.id.toLowerCase().includes(search.toLowerCase()) ||
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole = role === "" || emp.role === role;
    const matchesDepartment =
      department === "" || emp.department === department;
    const matchesDesignation =
      designation === "" || emp.designation === designation;

    return (
      matchesSearch &&
      matchesRole &&
      matchesDepartment &&
      matchesDesignation
    );
  });

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;

  const currentEmployees = filteredEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const totalPages =
    Math.ceil(filteredEmployees.length / employeesPerPage) || 1;

  return (
    <div className="p-6">

      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Employees
        </h1>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium">
          Total: {filteredEmployees.length}
        </span>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <input
            type="text"
            placeholder="Search by ID, Name or Email"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-lg px-4 py-3"
          />

          <select
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-lg px-4 py-3"
          >
            <option value="">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Employee">Employee</option>
            <option value="HR">HR</option>
          </select>

          <select
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-lg px-4 py-3"
          >
            <option value="">All Departments</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Administration">Administration</option>
          </select>

          <select
            value={designation}
            onChange={(e) => {
              setDesignation(e.target.value);
              setCurrentPage(1);
            }}
            className="border rounded-lg px-4 py-3"
          >
            <option value="">All Designations</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="HR Manager">HR Manager</option>
            <option value="System Admin">System Admin</option>
          </select>

        </div>

        <div className="flex justify-end mt-5">
          <button
            onClick={() => {
              setSearch("");
              setRole("");
              setDepartment("");
              setDesignation("");
              setCurrentPage(1);
            }}
            className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg"
          >
            Reset Filters
          </button>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4">ID</th>
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Email</th>
              <th className="text-left px-6 py-4">Role</th>
              <th className="text-left px-6 py-4">Department</th>
              <th className="text-left px-6 py-4">Designation</th>
              <th className="text-left px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {currentEmployees.length > 0 ? (
              currentEmployees.map((emp) => (
                <tr key={emp.id} className="border-t hover:bg-gray-50">

                  <td className="px-6 py-4">{emp.id}</td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {emp.name.charAt(0)}
                      </div>

                      <span>{emp.name}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4">{emp.email}</td>
                  <td className="px-6 py-4">{emp.role}</td>
                  <td className="px-6 py-4">{emp.department}</td>
                  <td className="px-6 py-4">{emp.designation}</td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2">

                      <button className="p-2 rounded-lg hover:bg-blue-100 text-blue-600">
                        <Eye size={18} />
                      </button>

                      <button className="p-2 rounded-lg hover:bg-green-100 text-green-600">
                        <Pencil size={18} />
                      </button>

                      <button className="p-2 rounded-lg hover:bg-red-100 text-red-600">
                        <Trash2 size={18} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-8 text-gray-500"
                >
                  No Employees Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
        >
          Previous
        </button>

        <span className="font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default Employees;