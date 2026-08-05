import { Wallet, CircleDollarSign, Clock3, Users } from "lucide-react";

const stats = [
  {
    title: "Total Payroll",
    value: "$52,480",
    icon: Wallet,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Paid",
    value: "$41,320",
    icon: CircleDollarSign,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Pending",
    value: "$11,160",
    icon: Clock3,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Employees Paid",
    value: "28 / 35",
    icon: Users,
    color: "bg-purple-100 text-purple-600",
  },
];

const PayrollStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h2 className="text-2xl font-bold text-gray-800 mt-2">
                  {item.value}
                </h2>
              </div>

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
              >
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PayrollStats;