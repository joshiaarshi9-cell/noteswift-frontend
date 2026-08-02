import { useState } from "react";

const AttendanceRow = ({ employee }) => {
  const [status, setStatus] = useState(employee.status);

  const statusColor = {
    Present: "bg-green-100 text-green-700",
    Absent: "bg-red-100 text-red-700",
    Late: "bg-orange-100 text-orange-700",
    "Half Day": "bg-yellow-100 text-yellow-700",
    "On Leave": "bg-blue-100 text-blue-700",
  };

  return (
    <tr className="border-b hover:bg-slate-50 transition">

      {/* Employee */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">

          <img
            src={`https://ui-avatars.com/api/?name=${employee.name}&background=2563eb&color=fff`}
            alt={employee.name}
            className="w-11 h-11 rounded-full"
          />

          <div>
            <h3 className="font-semibold text-slate-800">
              {employee.name}
            </h3>

            <p className="text-sm text-slate-500">
              {employee.email}
            </p>
          </div>

        </div>
      </td>

      {/* Department */}
      <td className="px-6 py-4">
        {employee.department}
      </td>

      {/* Attendance */}
      <td className="px-6 py-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={`px-3 py-2 rounded-lg font-medium border outline-none ${statusColor[status]}`}
        >
          <option>Present</option>
          <option>Absent</option>
          <option>Late</option>
          <option>Half Day</option>
          <option>On Leave</option>
        </select>
      </td>

      {/* Check In */}
      <td className="px-6 py-4">
        {employee.checkIn}
      </td>

      {/* Check Out */}
      <td className="px-6 py-4">
        {employee.checkOut}
      </td>

      {/* Working Hours */}
      <td className="px-6 py-4 font-semibold">
        {employee.hours}
      </td>

    </tr>
  );
};

export default AttendanceRow;