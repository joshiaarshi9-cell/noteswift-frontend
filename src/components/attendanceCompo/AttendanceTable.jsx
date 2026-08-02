import AttendanceRow from "./AttendanceRow";

const AttendanceTable = () => {

  const employees = [

    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav@gmail.com",
      department: "IT",
      status: "Present",
      checkIn: "09:00 AM",
      checkOut: "06:00 PM",
      hours: "9h",
    },

    {
      id: 2,
      name: "Riya Verma",
      email: "riya@gmail.com",
      department: "HR",
      status: "Late",
      checkIn: "09:35 AM",
      checkOut: "06:10 PM",
      hours: "8h 35m",
    },

    {
      id: 3,
      name: "Rahul Singh",
      email: "rahul@gmail.com",
      department: "Marketing",
      status: "Absent",
      checkIn: "--",
      checkOut: "--",
      hours: "--",
    },

    {
      id: 4,
      name: "Ananya Joshi",
      email: "ananya@gmail.com",
      department: "Finance",
      status: "Present",
      checkIn: "09:10 AM",
      checkOut: "06:05 PM",
      hours: "8h 55m",
    },

  ];

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
              Working Hours
            </th>

          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (
            <AttendanceRow
              key={employee.id}
              employee={employee}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default AttendanceTable;