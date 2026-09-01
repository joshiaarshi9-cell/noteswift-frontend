import React from "react";

const LeaveRequestRow = ({ request }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-50 text-green-600";
      case "Rejected":
        return "bg-red-50 text-red-600";
      case "Pending":
        return "bg-yellow-50 text-yellow-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <tr className="hover:bg-gray-50 transition">
      <td className="px-6 py-4 text-sm font-medium text-gray-800">
        {request.leaveType}
      </td>

      <td className="px-6 py-4 text-sm text-gray-600">
        {request.from}
      </td>

      <td className="px-6 py-4 text-sm text-gray-600">
        {request.to}
      </td>

      <td className="px-6 py-4 text-sm text-gray-600">
        {request.days}
      </td>

      <td className="px-6 py-4 text-sm text-gray-600 max-w-[220px]">
        <span className="block truncate">
          {request.reason}
        </span>
      </td>

      <td className="px-6 py-4">
        <span
          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
            request.status
          )}`}
        >
          {request.status}
        </span>
      </td>
    </tr>
  );
};

export default LeaveRequestRow;