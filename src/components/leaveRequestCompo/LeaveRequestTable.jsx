import React from "react";

const LeaveRequestTable = ({ leaveRequests }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-emerald-100 text-emerald-700 border border-emerald-200";

      case "Rejected":
        return "bg-rose-100 text-rose-700 border border-rose-200";

      default:
        return "bg-amber-100 text-amber-700 border border-amber-200";
    }
  };

  const getLeaveTypeStyle = (leaveType) => {
    switch (leaveType) {
      case "Sick Leave":
        return "bg-red-50 text-red-600";

      case "Casual Leave":
        return "bg-blue-50 text-blue-600";

      case "Earned Leave":
        return "bg-purple-50 text-purple-600";

      case "Emergency Leave":
        return "bg-orange-50 text-orange-600";

      default:
        return "bg-indigo-50 text-indigo-600";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">

      {/* ================= HEADER ================= */}
      <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800">
          My Leave Requests
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          View all your submitted leave requests
        </p>
      </div>

      {/* ================= TABLE SCROLL ================= */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[900px]">

          {/* ================= TABLE HEADER ================= */}
          <thead>
            <tr className="bg-indigo-50/60 text-left">

              <th className="px-4 lg:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                Leave Type
              </th>

              <th className="px-4 lg:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                From
              </th>

              <th className="px-4 lg:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                To
              </th>

              <th className="px-4 lg:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                Days
              </th>

              <th className="px-4 lg:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                Reason
              </th>

              <th className="px-4 lg:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                Status
              </th>

            </tr>
          </thead>

          {/* ================= TABLE BODY ================= */}
          <tbody className="divide-y divide-gray-100">

            {leaveRequests.map((request) => (

              <tr
                key={request.id}
                className="hover:bg-indigo-50/30 transition"
              >

                {/* Leave Type */}
                <td className="px-4 lg:px-6 py-4 whitespace-nowrap">

                  <span
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${getLeaveTypeStyle(
                      request.leaveType
                    )}`}
                  >
                    {request.leaveType}
                  </span>

                </td>

                {/* From */}
                <td className="px-4 lg:px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                  {request.from}
                </td>

                {/* To */}
                <td className="px-4 lg:px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                  {request.to}
                </td>

                {/* Days */}
                <td className="px-4 lg:px-6 py-4 whitespace-nowrap">

                  <span className="inline-flex items-center justify-center min-w-8 h-8 px-2 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-semibold">
                    {request.days}
                  </span>

                </td>

                {/* Reason */}
                <td className="px-4 lg:px-6 py-4 text-sm text-gray-600">

                  <span className="block max-w-[220px] truncate">
                    {request.reason}
                  </span>

                </td>

                {/* Status */}
                <td className="px-4 lg:px-6 py-4 whitespace-nowrap">

                  <span
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                      request.status
                    )}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current mr-2" />

                    {request.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>

      {/* ================= EMPTY STATE ================= */}
      {leaveRequests.length === 0 && (

        <div className="text-center py-12 px-4">

          <div className="w-12 h-12 mx-auto rounded-full bg-indigo-50 flex items-center justify-center mb-3">
            <span className="text-xl">📋</span>
          </div>

          <p className="text-sm font-medium text-gray-700">
            No leave requests found
          </p>

          <p className="text-xs text-gray-400 mt-1">
            Your submitted leave requests will appear here.
          </p>

        </div>

      )}

    </div>
  );
};

export default LeaveRequestTable;