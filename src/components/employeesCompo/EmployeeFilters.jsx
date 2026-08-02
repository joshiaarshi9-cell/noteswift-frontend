const EmployeeFilters = ({
  search,
  setSearch,
  role,
  setRole,
  department,
  setDepartment,
  designation,
  setDesignation,
  setCurrentPage,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 md:p-6 mb-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder="Search by ID, Name or Email"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Designations</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="HR Manager">HR Manager</option>
          <option value="System Admin">System Admin</option>
        </select>

      </div>

      <div className="flex justify-center sm:justify-end mt-5">
        <button
          onClick={() => {
            setSearch("");
            setRole("");
            setDepartment("");
            setDesignation("");
            setCurrentPage(1);
          }}
          className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg transition"
        >
          Reset Filters
        </button>
      </div>

    </div>
  );
};

export default EmployeeFilters;