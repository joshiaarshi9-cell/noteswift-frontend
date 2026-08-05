import LeaveRow from "./LeaveRow";

const LeaveTable = () => {
  const leaves = [
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav@gmail.com",
      department: "IT",
      type: "Annual Leave",
      from: "12 Aug",
      to: "15 Aug",
      days: "4",
      status: "Approved",
    },
    {
      id: 2,
      name: "Riya Verma",
      email: "riya@gmail.com",
      department: "HR",
      type: "Sick Leave",
      from: "20 Aug",
      to: "22 Aug",
      days: "3",
      status: "Pending",
    },
    {
      id: 3,
      name: "Rahul Singh",
      email: "rahul@gmail.com",
      department: "Marketing",
      type: "Casual Leave",
      from: "25 Aug",
      to: "25 Aug",
      days: "1",
      status: "Rejected",
    },
    {
      id: 4,
      name: "Ananya Joshi",
      email: "ananya@gmail.com",
      department: "Finance",
      type: "Emergency Leave",
      from: "28 Aug",
      to: "30 Aug",
      days: "3",
      status: "Approved",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow border overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left">Employee</th>
            <th className="px-6 py-4 text-left">Department</th>
            <th className="px-6 py-4 text-left">Leave Type</th>
            <th className="px-6 py-4 text-left">From</th>
            <th className="px-6 py-4 text-left">To</th>
            <th className="px-6 py-4 text-left">Days</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave) => (
            <LeaveRow
              key={leave.id}
              leave={leave}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveTable;