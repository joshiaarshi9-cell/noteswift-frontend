const LeaveHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-8 text-white shadow-lg mb-6">

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        <div>

          <h1 className="text-4xl font-bold">
            Leave Management
          </h1>

          <p className="mt-2 text-blue-100">
            Manage employee leave requests
          </p>

        </div>

        <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
          Export
        </button>

      </div>

    </div>
  );
};

export default LeaveHeader;