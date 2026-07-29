import { useAuth } from "../../context/AuthContext";

import WelcomeCard from "../../components/dashboardCommon/WelcomeCard";
import StatsCards from "../../components/dashboardCommon/StatsCards";
import AttendanceSummary from "../../components/dashboardCommon/AttendanceSummary";
import AttendanceChart from "../../components/dashboardCommon/AttendanceChart";
import RecentEmployees from "../../components/dashboardCommon/RecentEmployees";
import TodayAttendance from "../../components/dashboardCommon/TodayAttendance";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">

      <WelcomeCard />

      {/* Admin */}
      {user?.role === "admin" && (
        <>
          <StatsCards />


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AttendanceSummary />
            <AttendanceChart />
            <RecentEmployees />
            <TodayAttendance />
          </div>
        </>
      )}

      {/* HR */}
      {user?.role === "hr" && (
        <>
          <StatsCards />
          <AttendanceChart />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TodayAttendance />
            <RecentEmployees />
          </div>
        </>
      )}

      {/* Employee */}
      {user?.role === "employee" && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AttendanceSummary />
            <AttendanceChart />
          </div>
        </>
      )}

    </div>
  );
};

export default Dashboard;