const employees = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    status: "Present",
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer",
    status: "On Leave",
  },
  {
    name: "Rahul Singh",
    role: "Backend Developer",
    status: "Absent",
  },
  {
    name: "Neha Joshi",
    role: "HR Manager",
    status: "Present",
  },
];

const getStatusColor = (status) => {
  if (status === "Present")
    return "bg-green-100 text-green-700";

  if (status === "Absent")
    return "bg-red-100 text-red-700";

  return "bg-orange-100 text-orange-700";
};

const RecentEmployees = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">
          Recent Employees
        </h2>

        <button className="text-blue-600 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {employees.map((emp, index) => (
          <div
            key={index}
            className="flex items-center justify-between hover:bg-gray-50 p-3 rounded-xl duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                {emp.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold">
                  {emp.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {emp.role}
                </p>
              </div>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                emp.status
              )}`}
            >
              {emp.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentEmployees;