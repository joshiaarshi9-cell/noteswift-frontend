import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
import Attendance from "../pages/Attendance/Attendance"
import MyAttendance from "../pages/attendance/MyAttendance";

// Leave
import Leaves from "../pages/leave/Leaves";
import LeaveRequest from "../pages/leave/LeaveRequest";

// Settings
import Settings from "../pages/settings/Settings";
import RegisterInvitation from "../pages/auth/Register";

// Protected Route
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
const AppRoutes = () => {
  const { user, loading } = useAuth();
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          user ? (
            user.role === "admin" ? (
              <Navigate to="/admin/dashboard" replace />
            ) : user.role === "hr" ? (
              <Navigate to="/hr/dashboard" replace />
            ) : (
              <Navigate to="/employee/dashboard" replace />
            )
          ) : (
            <Login />
          )
        }
      />
      <Route
        path="/login"
        element={
          user ? (
            user.role === "admin" ? (
              <Navigate to="/admin/dashboard" replace />
            ) : user.role === "hr" ? (
              <Navigate to="/hr/dashboard" replace />
            ) : (
              <Navigate to="/employee/dashboard" replace />
            )
          ) : (
            <Login />
          )
        }
      />

      <Route path="/register" element={<RegisterInvitation />} />

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
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

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Invalid Route */}
      <Route
        path="*"
        element={
          user ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;