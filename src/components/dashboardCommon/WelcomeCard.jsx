import { CalendarDays, Clock } from "lucide-react";

const WelcomeCard = ({ user }) => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const greetings = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-5 shadow-lg">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div>
          <h2 className="text-3xl font-bold">
            {greetings()}, {user?.fullName || "User"} 👋
          </h2>

          <p className="mt-2 text-blue-100">
            Welcome back to the Employee Attendance Management System.
          </p>

          <span className="inline-block mt-4 bg-white/20 px-3 py-1 rounded-full text-sm font-medium capitalize">
            {user?.role}
          </span>
        </div>

        <div className="space-y-3 text-right">
          <div className="flex items-center justify-end gap-2">
            <CalendarDays size={18} />
            <span>{today}</span>
          </div>

          <div className="flex items-center justify-end gap-2">
            <Clock size={18} />
            <span>{currentTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;