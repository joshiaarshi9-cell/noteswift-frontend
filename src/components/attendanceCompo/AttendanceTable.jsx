import { useEffect } from "react";
import AttendanceRow from "./AttendanceRow";

const AttendanceTable = ({ employees, loading, fetchEmployees }) => {
  if (loading) return
  <div className="relative bg-white rounded-2xl shadow border overflow-x-auto">

    {loading && (
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60 backdrop-blur-sm">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    )}

    <table className="min-w-full">
      ...
    </table>

  </div>;

  return (
    <div className="bg-white rounded-2xl shadow border overflow-x-auto">

      <table className="min-w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="text-left px-6 py-4">
              Employee
            </th>

            <th className="text-left px-6 py-4">
              Department
            </th>

            <th className="text-left px-6 py-4">
              Attendance
            </th>

            <th className="text-left px-6 py-4">
              Check In
            </th>

            <th className="text-left px-6 py-4">
              Check Out
            </th>

            <th className="text-left px-6 py-4">
              Action
            </th>


          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (
            <AttendanceRow
              key={employee._id}
              employee={employee}
              fetchEmployees={fetchEmployees}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default AttendanceTable;