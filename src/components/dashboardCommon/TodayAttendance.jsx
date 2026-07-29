const attendance = [
  {
    name: "Aarav Sharma",
    checkIn: "09:02 AM",
    status: "Present",
  },
  {
    name: "Priya Verma",
    checkIn: "09:15 AM",
    status: "Present",
  },
  {
    name: "Rahul Singh",
    checkIn: "--",
    status: "Absent",
  },
  {
    name: "Neha Joshi",
    checkIn: "08:58 AM",
    status: "Present",
  },
];

const TodayAttendance = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">
          Today's Attendance
        </h2>

        <button className="text-blue-600 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {attendance.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  item.status === "Present"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              ></div>

              <div>
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Check In: {item.checkIn}
                </p>
              </div>
            </div>

            <span
              className={`text-sm font-semibold ${
                item.status === "Present"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayAttendance;