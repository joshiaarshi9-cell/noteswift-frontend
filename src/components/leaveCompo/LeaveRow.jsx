import { useEffect } from "react";

const LeaveRow = ({ item, ApproveTheLeave, rejectLeave }) => {

  const statusStyle = {
    Approved: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
    Rejected: "bg-red-100 text-red-700",
  };

  useEffect(() => {
    console.log(item)
  })

  return (
    <tr className="border-b hover:bg-slate-50">

      {/* Employee */}
      <td className="px-6 py-4">

        <div className="flex items-center gap-3">

          <img
            src={`https://ui-avatars.com/api/?name=${item.employee.fullName}&background=2563EB&color=fff`}
            alt={item.employee.fullName}
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h3 className="font-semibold">
              {item.employee.fullName}
            </h3>

            <p className="text-sm text-gray-500">
              {item.email}
            </p>
          </div>

        </div>

      </td>

      {/* Department */}
      <td className="px-6 py-4">
        {item.employee.department.name}
      </td>

      {/* Leave Type */}
      <td className="px-6 py-4">
        {item.leaveType}
      </td>

      {/* From */}
      <td className="px-6 py-4">
        {item.fromDate}
      </td>

      {/* To */}
      <td className="px-6 py-4">
        {item.toDate}
      </td>

      {/* Days */}
      <td className="px-6 py-4">
        {item.days}
      </td>

      {/* Status */}
      <td className="px-6 py-4">

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle[item.status]}`}
        >
          {item.status}
        </span>

      </td>

      {/* Action */}
      <td className="px-4 py-4">
        <div className="flex flex-col sm:flex-row gap-2">
          {
            item.status !== "Approved" && item.status !== "Rejected" ? (
              <>
                <button
                  onClick={() => ApproveTheLeave(item._id)}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm w-full sm:w-auto"
                >
                  Approve
                </button>

                <button
                  onClick={() => rejectLeave(item._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm w-full sm:w-auto"
                >
                  Reject
                </button>
              </>
            ) : (
              <div
                className={`rounded-full px-2 ${item.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                  }`}
              >
                {item.status === "Approved" ? "---------" : "---------"}
              </div>
            )
          }




        </div>
      </td>

    </tr>
  );
};

export default LeaveRow;