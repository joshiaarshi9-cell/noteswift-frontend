import {
  CheckCircle,
  XCircle,
  Clock3,
  Plane,
} from "lucide-react";

const AttendanceStats = () => {
  const stats = [
    {
      title: "Present",
      value: 25,
      icon: <CheckCircle size={28} />,
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-600",
    },
    {
      title: "Absent",
      value: 4,
      icon: <XCircle size={28} />,
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-600",
    },
    {
      title: "Late",
      value: 3,
      icon: <Clock3 size={28} />,
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-600",
    },
    {
      title: "On Leave",
      value: 2,
      icon: <Plane size={28} />,
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`${item.bg} ${item.border} border rounded-2xl p-6 shadow-sm hover:shadow-md transition`}
        >
          <div className={item.text}>{item.icon}</div>

          <p className="text-gray-500 mt-4">{item.title}</p>

          <h2 className={`text-4xl font-bold mt-2 ${item.text}`}>
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default AttendanceStats;