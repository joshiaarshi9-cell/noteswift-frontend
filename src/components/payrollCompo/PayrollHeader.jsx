import { Download, Plus } from "lucide-react";

const PayrollHeader = ({ onGeneratePayroll }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Payroll Management
        </h1>
        <p className="text-gray-500 mt-1">
          Manage employee salaries and payroll records.
        </p>
      </div>

      {/* Right */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-100 transition">
          <Download size={18} />
          Export
        </button>

        <button
          onClick={onGeneratePayroll}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition shadow"
        >
          <Plus size={18} />
          Generate Payroll
        </button>
      </div>
    </div>
  );
};

export default PayrollHeader;