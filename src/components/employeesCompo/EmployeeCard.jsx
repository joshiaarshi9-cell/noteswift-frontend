import { Eye, Pencil, Trash2 } from "lucide-react";

const EmployeeCard = ({ emp }) => {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">

      <div className="flex items-center gap-3 mb-4">

        <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {emp.name.charAt(0)}
        </div>

        <div>
          <h3 className="font-semibold">{emp.name}</h3>
          <p className="text-sm text-gray-500">{emp.email}</p>
        </div>

      </div>

      <div className="space-y-2 text-sm">

        <p><strong>ID:</strong> {emp.id}</p>
        <p><strong>Role:</strong> {emp.role}</p>
        <p><strong>Department:</strong> {emp.department}</p>
        <p><strong>Designation:</strong> {emp.designation}</p>

      </div>

      <div className="flex justify-end gap-2 mt-4">

        <button className="p-2 rounded-lg bg-blue-100 text-blue-600">
          <Eye size={18} />
        </button>

        <button className="p-2 rounded-lg bg-green-100 text-green-600">
          <Pencil size={18} />
        </button>

        <button className="p-2 rounded-lg bg-red-100 text-red-600">
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
};

export default EmployeeCard;