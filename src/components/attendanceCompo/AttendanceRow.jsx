import { useState } from "react";
import { checkIn, checkOut } from "../../services/attendenceServices";
import toast from "react-hot-toast";

const AttendanceRow = ({ employee, fetchEmployees }) => {
  const [status, setStatus] = useState(employee.status);

  const handleCheckIn = async (id) => {
    try {
      const data = await checkIn(id);

      toast.success("Attendence checked in successfully");
      await fetchEmployees();


    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckOut = async (id) => {
    try {
      const data = await checkOut(id);

      toast.success("Attendence check out successfully");
      await fetchEmployees();


    } catch (err) {
      console.log(err);
    }
  };


  return (
    <tr className="border-b hover:bg-slate-50 transition">

      {/* Employee */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">

          <img
            src={`https://ui-avatars.com/api/?name=${employee.fullName}&background=2563eb&color=fff`}
            alt={employee.fullName}
            className="w-11 h-11 rounded-full"
          />

          <div>
            <h3 className="font-semibold text-slate-800">
              {employee.fullName}
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
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
      ${employee.status === "Present"
              ? "bg-green-100 text-green-700"
              : employee.status === "Absent"
                ? "bg-red-100 text-red-700"
                : employee.status === "Late"
                  ? "bg-yellow-100 text-yellow-700"
                  : employee.status === "Half Day"
                    ? "bg-orange-100 text-orange-700"
                    : employee.status === "Leave"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700"
            }
    `}
        >
          {employee.status || "Absent"}
        </span>
      </td>

      {/* Check In */}
      <td className="px-6 py-4">
        {employee.checkIn || "--"}
      </td>

      {/* Check Out */}
      <td className="px-6 py-4">
        {employee.checkOut || "--"}
      </td>

      {/* check in and check out   */}
      <td className="px-6 py-4">
        {!employee.checkIn ? (
          <button
            onClick={() => handleCheckIn(employee._id)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Check In
          </button>
        ) : !employee.checkOut ? (
          <button
            onClick={() => handleCheckOut(employee._id)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Check Out
          </button>
        ) : (
          <span className="text-green-600 font-medium">
            Completed
          </span>
        )}
      </td>

    </tr>
  );
};

export default AttendanceRow;