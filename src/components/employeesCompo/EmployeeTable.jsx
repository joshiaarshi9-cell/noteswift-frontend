import EmployeeRow from "./EmployeeRow";
import EmployeeCard from "./EmployeeCard"

const EmployeeTable = ({ employees }) => {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-200 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="text-left px-6 py-4">ID</th>
              <th className="text-left px-6 py-4">Name</th>
              <th className="text-left px-6 py-4">Email</th>
              <th className="text-left px-6 py-4">Role</th>
              <th className="text-left px-6 py-4">Department</th>
              <th className="text-left px-6 py-4">Designation</th>
              <th className="text-left px-6 py-4">Actions</th>
            </tr>

          </thead>

          <tbody>

            {employees.length > 0 ? (
              employees.map((emp) => (
                <EmployeeRow key={emp._id} emp={emp} />
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-8">
                  No Employees Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

      {/* Mobile Cards */}

      <div className="md:hidden space-y-4">

        {employees.length > 0 ? (
          employees.map((employee) => (
            <EmployeeCard key={employee._id} employee={employee} />
          ))
        ) : (
          <div className="bg-white rounded-xl p-6 text-center text-gray-500">
            No Employees Found
          </div>
        )}

      </div>
    </>
  );
};

export default EmployeeTable;