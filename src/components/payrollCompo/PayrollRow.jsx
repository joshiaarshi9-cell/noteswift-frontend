const PayrollRow = ({ employee }) => {

  const statusColor = {
    Paid: "bg-green-100 text-green-700",
    Pending: "bg-orange-100 text-orange-700",
  };

  return (
    <tr className="border-b hover:bg-slate-50 transition">

      {/* Employee */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">

          <img
            src={`https://ui-avatars.com/api/?name=${employee.name}&background=2563EB&color=fff`}
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

      {/* Salary */}
      <td className="px-6 py-4 font-semibold">
        ₹{employee.salary}
      </td>

      {/* Bonus */}
      <td className="px-6 py-4 text-green-600 font-medium">
        ₹{employee.bonus}
      </td>

      {/* Deduction */}
      <td className="px-6 py-4 text-red-600 font-medium">
        ₹{employee.deduction}
      </td>

      {/* Net Salary */}
      <td className="px-6 py-4 font-bold text-blue-700">
        ₹{employee.netSalary}
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[employee.status]}`}
        >
          {employee.status}
        </span>
      </td>

      {/* Action */}
      <td className="px-6 py-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
          Download Slip
        </button>
      </td>

    </tr>
  );
};

export default PayrollRow;