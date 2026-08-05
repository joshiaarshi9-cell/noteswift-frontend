const LeaveRow = ({ leave }) => {

  const statusStyle = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <tr className="border-b hover:bg-slate-50">

      {/* Employee */}
      <td className="px-6 py-4">

        <div className="flex items-center gap-3">

          <img
            src={`https://ui-avatars.com/api/?name=${leave.name}&background=2563EB&color=fff`}
            alt={leave.name}
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h3 className="font-semibold">
              {leave.name}
            </h3>

            <p className="text-sm text-gray-500">
              {leave.email}
            </p>
          </div>

        </div>

      </td>

      {/* Department */}
      <td className="px-6 py-4">
        {leave.department}
      </td>

      {/* Leave Type */}
      <td className="px-6 py-4">
        {leave.type}
      </td>

      {/* From */}
      <td className="px-6 py-4">
        {leave.from}
      </td>

      {/* To */}
      <td className="px-6 py-4">
        {leave.to}
      </td>

      {/* Days */}
      <td className="px-6 py-4">
        {leave.days}
      </td>

      {/* Status */}
      <td className="px-6 py-4">

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle[leave.status]}`}
        >
          {leave.status}
        </span>

      </td>

      {/* Action */}
      <td className="px-4 py-4">
  <div className="flex flex-col sm:flex-row gap-2">

    <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm w-full sm:w-auto">
      Approve
    </button>

    <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm w-full sm:w-auto">
      Reject
    </button>

  </div>
</td>

    </tr>
  );
};

export default LeaveRow;