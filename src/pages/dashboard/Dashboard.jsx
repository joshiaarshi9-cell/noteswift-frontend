import { useAuth } from "../../context/AuthContext";

import WelcomeCard from "../../components/dashboardCommon/WelcomeCard";
import StatsCards from "../../components/dashboardCommon/StatsCards";
import AttendanceSummary from "../../components/dashboardCommon/AttendanceSummary";
import AttendanceChart from "../../components/dashboardCommon/AttendanceChart";
import RecentEmployees from "../../components/dashboardCommon/RecentEmployees";
import TodayAttendance from "../../components/dashboardCommon/TodayAttendance";
import { useEffect, useState } from "react";
import { getDashboardStats } from "../../Data/dashboardStats";
import { getDashboardSummary } from "../../services/dashboardSummary";

const Dashboard = () => {
  const { user } = useAuth();

  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const data = await getDashboardSummary();
        setSummary(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSummary();
  }, []);

  const stats = getDashboardStats(summary);


  return (
    <div className="space-y-6">

      <WelcomeCard />

      {/* Admin */}
      {user?.role === "admin" && (
        <>
          <StatsCards stats={ stats } />


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AttendanceSummary summary= { summary } />
            <AttendanceChart />
            <RecentEmployees />
            <TodayAttendance />
          </div>
        </>
      )}

      {/* HR */}
      {user?.role === "hr" && (
        <>
          <StatsCards stats={ stats } />
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
            <AttendanceSummary summary= { summary } />
            <AttendanceChart />
          </div>
        </>
      )}

    </div>
  );
};

export default Dashboard;