import { Routes, Route } from "react-router-dom";

// Auth
import Login from "../pages/auth/Login";

// Layout
import DashboardLayout from "../components/common/DashboardLayout";

// Dashboard
import Dashboard from "../pages/dashboard/Dashboard";

// Employee
import Employees from "../pages/employee/Employees";
import InviteEmployee from "../pages/employee/InviteEmployee";
import Profile from "../pages/employee/Profile";

// Attendance
import Attendance from "../pages/attendance/Attendance";
import MyAttendance from "../pages/attendance/MyAttendance";

// Leave
import Leaves from "../pages/leave/Leaves";
import LeaveRequest from "../pages/leave/LeaveRequest";

// Department
// import Departments from "../pages/department/Departments";

// Reports
// import Reports from "../pages/reports/Reports";

// Settings
import Settings from "../pages/settings/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard Layout */}
      <Route element={<DashboardLayout />}>
        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Employee */}
        <Route path="/employees" element={<Employees />} />
        <Route path="/invite-employee" element={<InviteEmployee />} />
        <Route path="/profile" element={<Profile />} />

        {/* Attendance */}
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/my-attendance" element={<MyAttendance />} />

        {/* Leave */}
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/leave-request" element={<LeaveRequest />} />

        {/* Department */}
        {/* <Route path="/departments" element={<Departments />} /> */}

        {/* Reports */}
        {/* <Route path="/reports" element={<Reports />} /> */}

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;