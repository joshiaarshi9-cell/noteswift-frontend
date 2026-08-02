const EmployeeHeader = ({ total }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
        Employees
      </h1>

      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium w-fit">
        Total: {total}
      </span>

    </div>
  );
};

export default EmployeeHeader;