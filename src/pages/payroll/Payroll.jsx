import { Eye, SquarePen } from "lucide-react";

const PayrollRow = ({ employee }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Processing":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="px-6 py-4 font-medium">{employee.name}</td>
      <td className="px-6 py-4">{employee.department}</td>
      <td className="px-6 py-4">${employee.basicSalary}</td>
      <td className="px-6 py-4 text-green-600">
        +${employee.bonus}
      </td>
      <td className="px-6 py-4 text-red-600">
        -${employee.deduction}
      </td>
      <td className="px-6 py-4 font-semibold">
        ${employee.netSalary}
      </td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
            employee.status
          )}`}
        >
          {employee.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-3">
          <Eye
            size={18}
            className="text-blue-600 cursor-pointer hover:scale-110"
          />
          <SquarePen
            size={18}
            className="text-green-600 cursor-pointer hover:scale-110"
          />
        </div>
      </td>
    </tr>
  );
};

export default PayrollRow;