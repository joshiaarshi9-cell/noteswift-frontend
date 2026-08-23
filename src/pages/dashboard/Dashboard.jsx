import { useAuth } from "../../context/AuthContext";

import Header from "../../components/common/Header";
import StatsCards from "../../components/common/StatsCards";
import AttendanceSummary from "../../components/dashboardCommon/AttendanceSummary";
import AttendanceChart from "../../components/dashboardCommon/AttendanceChart";
import RecentEmployees from "../../components/dashboardCommon/RecentEmployees";
import TodayAttendance from "../../components/dashboardCommon/TodayAttendance";

import { useEffect, useState } from "react";

import { getDashboardStats } from "../../Data/statsCards";
import {
  getDashboardSummary,
  getAttendanceOverview,
} from "../../services/dashboardSummary";


const Dashboard = () => {
  const { user } = useAuth();

  const [summary, setSummary] = useState(null);
  const [overview, setOverview] = useState([]);

  // =========================
  // Department
  // =========================

  const departmentName =
    user?.department?.name?.trim().toLowerCase();


  // =========================
  // Fetch Attendance Overview
  // =========================

  useEffect(() => {
    if (!user) return;

    const fetchAttendanceOverview = async () => {
      try {
        const data = await getAttendanceOverview();

        setOverview(data.overview || []);
      } catch (error) {
        console.log(
          "Attendance overview error:",
          error
        );
      }
    };

    fetchAttendanceOverview();
  }, [user]);


  // =========================
  // Fetch Dashboard Summary
  // =========================

  useEffect(() => {
    if (!user) return;

    const fetchSummary = async () => {
      try {
        const data = await getDashboardSummary();

        setSummary(data);
      } catch (error) {
        console.log(
          "Dashboard summary error:",
          error
        );
      }
    };

    fetchSummary();
  }, [user]);


  const stats = getDashboardStats(summary);


  // =========================
  // Loading
  // =========================

  if (!user) {
    return (
      <div className="flex items-center justify-center h-full">
        Loading...
      </div>
    );
  }


  return (
    <div className="space-y-6">

      {/* =========================
          HEADER
      ========================= */}

      <Header
        title={`Good Evening, ${user.fullName} 👋`}
        subtitle="Welcome back to the Employee Attendance Management System."
        titleClassName="text-4xl font-extrabold tracking-tight text-white"
        subtitleClassName="mt-3 text-lg text-blue-100/90 font-normal"
        rightContent={
          <div className="text-right text-white">

            <p className="text-lg font-medium">
              Wednesday, August 5, 2026
            </p>

            <p className="mt-2 text-3xl font-bold tracking-wide">
              11:40 PM
            </p>

          </div>
        }
      />


      {/* =========================
          ADMIN DASHBOARD
      ========================= */}

      {user.role === "admin" && (
        <>
          <StatsCards stats={stats} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <AttendanceSummary
              summary={summary}
            />

            <AttendanceChart
              overview={overview}
            />

            <RecentEmployees />

            <TodayAttendance />

          </div>
        </>
      )}


      {/* =========================
          FINANCE MANAGER
      ========================= */}

      {user.role === "manager" &&
        departmentName === "finance" && (
          <>
            <StatsCards stats={stats} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <AttendanceSummary
                summary={summary}
              />

              <AttendanceChart
                overview={overview}
              />

              <TodayAttendance />

              <RecentEmployees />

            </div>
          </>
        )}


      {/* =========================
          ACADEMIC MANAGER
      ========================= */}

      {user.role === "manager" &&
        departmentName === "academic" && (
          <>
            <StatsCards stats={stats} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <AttendanceSummary
                summary={summary}
              />

              <AttendanceChart
                overview={overview}
              />

              <TodayAttendance />

              <RecentEmployees />

            </div>
          </>
        )}


      {/* =========================
          HR MANAGER
      ========================= */}

      {user.role === "manager" &&
        (departmentName === "human resources" ||
          departmentName === "hr") && (
            
          <>
            <StatsCards stats={stats} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AttendanceSummary
                summary={summary}
              />

              <AttendanceChart
                overview={overview}
              />

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <TodayAttendance />

              <RecentEmployees />

            </div>
          </>
        )}


      {/* =========================
          NORMAL EMPLOYEE
      ========================= */}

      {user.role === "employee" && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <AttendanceSummary
              summary={summary}
            />

            <AttendanceChart
              overview={overview}
            />

          </div>
        </>
      )}

    </div>
  );
};

export default Dashboard;