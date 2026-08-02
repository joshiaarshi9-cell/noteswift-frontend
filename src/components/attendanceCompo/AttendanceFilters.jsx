const AttendanceFilters = ({
  search,
  setSearch,
  department,
  setDepartment,
  setCurrentPage,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 mb-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="🔍 Search employee..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-xl px-4 py-3"
        >
          <option value="">All Departments</option>
          <option>IT</option>
          <option>HR</option>
          <option>Marketing</option>
          <option>Finance</option>
          <option>Sales</option>
        </select>

        <button
          onClick={() => {
            setSearch("");
            setDepartment("");
            setCurrentPage(1);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition"
        >
          Reset Filters
        </button>

      </div>

    </div>
  );
};

export default AttendanceFilters;