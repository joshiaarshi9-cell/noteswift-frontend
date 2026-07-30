const employees = [
  {
    _id: 1,
    employeeId: "EMP001",
    fullName: "Aarav Sharma",
    designation: "Frontend Developer",
    department: "IT",
    joinedDate: "28 Jul 2026",
  },
  {
    _id: 2,
    employeeId: "EMP002",
    fullName: "Priya Verma",
    designation: "UI/UX Designer",
    department: "Design",
    joinedDate: "27 Jul 2026",
  },
  {
    _id: 3,
    employeeId: "EMP003",
    fullName: "Rahul Singh",
    designation: "Backend Developer",
    department: "IT",
    joinedDate: "25 Jul 2026",
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
    <div className="space-y-5">
      {employees.map((emp) => (
        <div
          key={emp._id}
          className="
        flex items-center gap-4
        bg-white
        p-5
        rounded-2xl
        border border-gray-200
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        hover:border-blue-300
        transition-all
        duration-300
        cursor-pointer
      "
        >
          {/* Avatar */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-xl font-bold shadow-md shrink-0">
            {emp.fullName.charAt(0)}
          </div>

          {/* Employee Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              {emp.fullName}
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              <span className="font-medium text-gray-700">
                {emp.employeeId}
              </span>
              <span className="mx-2 text-gray-300">•</span>
              {emp.designation}
            </p>

            <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
              <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
                {emp.department}
              </span>

              <span>•</span>

              <span>Joined {emp.joinedDate}</span>
            </div>
          </div>

          {/* New Badge */}
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
            New
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentEmployees;