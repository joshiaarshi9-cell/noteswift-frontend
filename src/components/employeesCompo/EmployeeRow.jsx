import { Eye, Pencil, Trash2 } from "lucide-react";

const EmployeeRow = ({ emp }) => {
  return (
    <tr className="border-t hover:bg-gray-50">

      <td className="px-6 py-4">{emp.id}</td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            {emp.name.charAt(0)}
          </div>

          <span>{emp.name}</span>

        </div>
      </td>

      <td className="px-6 py-4">{emp.email}</td>
      <td className="px-6 py-4">{emp.role}</td>
      <td className="px-6 py-4">{emp.department}</td>
      <td className="px-6 py-4">{emp.designation}</td>

      <td className="px-6 py-4">

        <div className="flex gap-2">

          <button className="p-2 rounded-lg hover:bg-blue-100 text-blue-600">
            <Eye size={18} />
          </button>

          <button className="p-2 rounded-lg hover:bg-green-100 text-green-600">
            <Pencil size={18} />
          </button>

          <button className="p-2 rounded-lg hover:bg-red-100 text-red-600">
            <Trash2 size={18} />
          </button>

        </div>

      </td>

    </tr>
  );
};

export default EmployeeRow;