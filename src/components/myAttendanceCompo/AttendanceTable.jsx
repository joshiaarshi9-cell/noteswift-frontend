import React from "react";

const AttendanceTable = ({ attendance }) => {
  const getStatusStyle = (status) => {
    if (status === "Present") {
      return "bg-green-50 text-green-600";
    }

    if (status === "Absent") {
      return "bg-red-50 text-red-600";
    }

    if (status === "Late") {
      return "bg-yellow-50 text-yellow-600";
    }

    return "bg-gray-50 text-gray-600";
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Attendance History
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Your daily attendance records
            </p>
          </div>

          <span className="text-sm text-gray-400">
            {attendance.length} records
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px]">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                Date
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                Check In
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                Check Out
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                Working Hours
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-gray-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {attendance.length > 0 ? (
              attendance.map((record) => (
                <tr
                  key={record.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-5 py-4 text-sm font-medium text-gray-700">
                    {record.date}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {record.checkIn}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {record.checkOut}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {record.workingHours}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex px-3 py-1.5 rounded-full text-xs font-medium ${getStatusStyle(
                        record.status
                      )}`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-5 py-12 text-center"
                >
                  <p className="text-sm text-gray-500">
                    No attendance records found
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    Try changing your search or filters.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceTable;