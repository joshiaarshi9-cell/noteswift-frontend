import PayrollRow from "./PayrollRow";

const employees = [
  {
    id: 1,
    name: "John Doe",
    department: "IT",
    basicSalary: 3000,
    bonus: 400,
    deduction: 150,
    netSalary: 3250,
    status: "Paid",
  },
  {
    id: 2,
    name: "Emma Watson",
    department: "HR",
    basicSalary: 2800,
    bonus: 300,
    deduction: 100,
    netSalary: 3000,
    status: "Pending",
  },
  {
    id: 3,
    name: "Michael Lee",
    department: "Finance",
    basicSalary: 3500,
    bonus: 500,
    deduction: 200,
    netSalary: 3800,
    status: "Processing",
  },
];

const PayrollTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-4 text-left">Employee</th>
              <th className="px-6 py-4 text-left">Department</th>
              <th className="px-6 py-4 text-left">Basic Salary</th>
              <th className="px-6 py-4 text-left">Bonus</th>
              <th className="px-6 py-4 text-left">Deduction</th>
              <th className="px-6 py-4 text-left">Net Salary</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <PayrollRow
                key={employee.id}
                employee={employee}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayrollTable;