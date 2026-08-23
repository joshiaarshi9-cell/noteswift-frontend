import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// =========================
// AUTH
// =========================
import Login from "../pages/auth/Login";
import RegisterInvitation from "../pages/auth/Register";

// =========================
// LAYOUT
// =========================
import DashboardLayout from "../components/common/DashboardLayout";

// =========================
// DASHBOARD
// =========================
import Dashboard from "../pages/dashboard/Dashboard";

// =========================
// EMPLOYEE
// =========================
import Employees from "../pages/employee/Employees";
import InviteEmployee from "../pages/employee/InviteEmployee";
import Profile from "../pages/employee/Profile";

// =========================
// ATTENDANCE
// =========================
import Attendance from "../pages/Attendance/Attendance";
import MyAttendance from "../pages/attendance/MyAttendance";

// =========================
// LEAVE
// =========================
import Leaves from "../pages/leave/Leaves";
import LeaveRequest from "../pages/leave/LeaveRequest";

// =========================
// PAYROLL
// =========================
import Payroll from "../pages/payroll/Payroll";

// =========================
// SETTINGS
// =========================
import Settings from "../pages/settings/Settings";


// =====================================================
// PROTECTED ROUTE
// =====================================================

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


// =====================================================
// ROLE ROUTE
// =====================================================

const RoleRoute = ({ allowedRoles, children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};


// =====================================================
// DEPARTMENT ROUTE
// =====================================================

const DepartmentRoute = ({ department, children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Only managers
  if (user.role !== "manager") {
    return <Navigate to="/dashboard" replace />;
  }

  const departmentName =
    user.department?.name?.trim().toLowerCase();

  if (departmentName !== department.toLowerCase()) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};


// =====================================================
// APP ROUTES
// =====================================================

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <Routes>

      {/* =================================================
          PUBLIC ROUTES
      ================================================= */}

      <Route
        path="/"
        element={
          user ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />

      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />

      <Route
        path="/register"
        element={<RegisterInvitation />}
      />


      {/* =================================================
          PROTECTED ROUTES
      ================================================= */}

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >

        {/* =========================
            COMMON DASHBOARD
        ========================= */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        {/* =========================
            ADMIN
        ========================= */}

        <Route
          path="/employees"
          element={
            <RoleRoute allowedRoles={["admin"]}>
              <Employees />
            </RoleRoute>
          }
        />

        <Route
          path="/invite-employee"
          element={
            <RoleRoute allowedRoles={["admin"]}>
              <InviteEmployee />
            </RoleRoute>
          }
        />

        <Route
          path="/attendance"
          element={
            <RoleRoute allowedRoles={["admin"]}>
              <Attendance />
            </RoleRoute>
          }
        />

        <Route
          path="/leaves"
          element={
            <RoleRoute allowedRoles={["admin"]}>
              <Leaves />
            </RoleRoute>
          }
        />

        <Route
          path="/payroll"
          element={
            <RoleRoute allowedRoles={["admin"]}>
              <Payroll />
            </RoleRoute>
          }
        />

        <Route
          path="/settings"
          element={<Settings />}
        />


        {/* =========================
            NORMAL EMPLOYEE
        ========================= */}

        <Route
          path="/my-attendance"
          element={
            <RoleRoute allowedRoles={["employee"]}>
              <MyAttendance />
            </RoleRoute>
          }
        />

        <Route
          path="/leave-request"
          element={
            <RoleRoute allowedRoles={["employee"]}>
              <LeaveRequest />
            </RoleRoute>
          }
        />

        <Route
          path="/profile"
          element={<Profile />}
        />


        {/* =================================================
            HR MANAGER
        ================================================= */}

        <Route
          path="/hr/employees"
          element={
            <DepartmentRoute department="Human Resources">
              <Employees />
            </DepartmentRoute>
          }
        />

        <Route
          path="/hr/invite-employee"
          element={
            <DepartmentRoute department="Human Resources">
              <InviteEmployee />
            </DepartmentRoute>
          }
        />

        <Route
          path="/hr/attendance"
          element={
            <DepartmentRoute department="Human Resources">
              <Attendance />
            </DepartmentRoute>
          }
        />

        <Route
          path="/hr/leaves"
          element={
            <DepartmentRoute department="Human Resources">
              <Leaves />
            </DepartmentRoute>
          }
        />

        <Route
          path="/hr/payroll"
          element={
            <DepartmentRoute department="Human Resources">
              <Payroll />
            </DepartmentRoute>
          }
        />


        {/* =================================================
            FINANCE MANAGER
        ================================================= */}

        <Route
          path="/finance/employees"
          element={
            <DepartmentRoute department="Finance">
              <Employees />
            </DepartmentRoute>
          }
        />

        <Route
          path="/finance/transactions"
          element={
            <DepartmentRoute department="Finance">
              <div className="p-6">
                Finance Transactions
              </div>
            </DepartmentRoute>
          }
        />

        <Route
          path="/finance/budget"
          element={
            <DepartmentRoute department="Finance">
              <div className="p-6">
                Finance Budget
              </div>
            </DepartmentRoute>
          }
        />

        <Route
          path="/finance/reports"
          element={
            <DepartmentRoute department="Finance">
              <div className="p-6">
                Finance Reports
              </div>
            </DepartmentRoute>
          }
        />


        {/* =================================================
            ACADEMIC MANAGER
        ================================================= */}

        <Route
          path="/academic"
          element={
            <DepartmentRoute department="Academic">
              <div className="p-6">
                Academic Management
              </div>
            </DepartmentRoute>
          }
        />

        <Route
          path="/academic/attendance"
          element={
            <DepartmentRoute department="Academic">
              <Attendance />
            </DepartmentRoute>
          }
        />

        <Route
          path="/academic/performance"
          element={
            <DepartmentRoute department="Academic">
              <div className="p-6">
                Academic Performance
              </div>
            </DepartmentRoute>
          }
        />

        <Route
          path="/academic/faculty"
          element={
            <DepartmentRoute department="Academic">
              <Employees />
            </DepartmentRoute>
          }
        />

        <Route
          path="/academic/reports"
          element={
            <DepartmentRoute department="Academic">
              <div className="p-6">
                Academic Reports
              </div>
            </DepartmentRoute>
          }
        />

      </Route>


      {/* =================================================
          FALLBACK
      ================================================= */}

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