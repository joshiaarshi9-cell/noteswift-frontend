const EmployeeStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">

      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <p className="text-gray-500">Total Employees</p>
        <h2 className="text-3xl font-bold mt-2">138</h2>
      </div>

      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <p className="text-gray-500">Active</p>
        <h2 className="text-3xl font-bold text-green-600 mt-2">128</h2>
      </div>

      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <p className="text-gray-500">On Leave</p>
        <h2 className="text-3xl font-bold text-orange-500 mt-2">6</h2>
      </div>

      <div className="bg-white rounded-2xl border p-6 shadow-sm">
        <p className="text-gray-500">Departments</p>
        <h2 className="text-3xl font-bold text-blue-600 mt-2">8</h2>
      </div>

    </div>
  );
};

export default EmployeeStats;