import {
  Users,
  UserCheck,
  CalendarDays,
  UserX,
} from "lucide-react";

const stats = [
  {
    title: "Total Employees",
    value: "248",
    subtitle: "+12 this month",
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "border-blue-200",
    valueColor: "text-blue-600",
    subColor: "text-green-600",
  },
  {
    title: "Present Today",
    value: "186",
    subtitle: "75% of total",
    icon: UserCheck,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    border: "border-green-200",
    valueColor: "text-green-600",
    subColor: "text-gray-500",
  },
  {
    title: "On Leave",
    value: "12",
    subtitle: "5% of total",
    icon: CalendarDays,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    border: "border-orange-200",
    valueColor: "text-orange-500",
    subColor: "text-gray-500",
  },
  {
    title: "Absent Today",
    value: "50",
    subtitle: "20% of total",
    icon: UserX,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    border: "border-red-200",
    valueColor: "text-red-500",
    subColor: "text-gray-500",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className={`bg-white rounded-2xl border ${item.border} p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">
                  {item.title}
                </p>

                <h2
                  className={`text-4xl font-bold mt-2 ${item.valueColor}`}
                >
                  {item.value}
                </h2>

                <p className={`mt-2 text-sm ${item.subColor}`}>
                  {item.subtitle}
                </p>
              </div>

              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${item.iconBg}`}
              >
                <Icon
                  size={34}
                  className={item.iconColor}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;