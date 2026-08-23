const LeaveFilters = ({
  search,
  setSearch,
  department,
  setDepartment,
  leaveType,
  setLeaveType,
  status,
  setStatus,
  setCurrentPage,
  
  departments,
  setDepartments
}) => {
  const handleReset = () => {
    setSearch("");
    setDepartment("");
    setLeaveType("");
    setStatus("Pending");
    setCurrentPage(1);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search Employee..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Department */}
        <select
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-xl px-4 py-3"
        >
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option
              key={dept._id}
              value={dept._id}
            >
              {dept.name}
            </option>
          ))}
        </select>

        {/* Leave Type */}
        <select
          value={leaveType}
          onChange={(e) => {
            setLeaveType(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-xl px-4 py-3"
        >
          <option value="">All Leave Types</option>
          <option value="Annual">Annual Leave</option>
          <option value="Sick">Sick Leave</option>
          <option value="Casual">Casual Leave</option>
          <option value="Emergency">Emergency Leave</option>
        </select>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-xl px-4 py-3"
        >
          <option value="Pending">Pending</option>
          <option value="all">All Status</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

        {/* Reset */}
        <button
          onClick={handleReset}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-3 font-semibold"
        >
          Reset Filters
        </button>

      </div>

    </div>
  );
};

export default LeaveFilters;