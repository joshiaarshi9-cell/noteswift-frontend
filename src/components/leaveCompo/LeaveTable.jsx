import LeaveRow from "./LeaveRow";

const LeaveTable = ({ leaves, ApproveTheLeave, rejectLeave }) => {
  
    

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
          {leaves.map((item) => (
            <LeaveRow
              key={item._id}
              item={item}
              ApproveTheLeave={ApproveTheLeave}
              rejectLeave={rejectLeave}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveTable;