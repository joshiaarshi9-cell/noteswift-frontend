import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileText,
  Building2,
  BarChart3,
  Settings,
  User,
  Wallet,
  ArrowDownUp,
  PiggyBank,
  GraduationCap,
  ClipboardCheck,
  Trophy,
  UserRound,
  UserPlus,
  UserCheck,
} from "lucide-react";

export const menus = {
  // =========================
  // ADMIN
  // =========================
  admin: [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: Users,
      label: "Employees",
      path: "/employees",
    },
    {
      icon: UserPlus,
      label: "Add Employees",
      path: "/invite-employee",
    },
    {
      icon: CalendarDays,
      label: "Attendance",
      path: "/attendance",
    },
    {
      icon: FileText,
      label: "Leaves",
      path: "/leaves",
    },
    {
      icon: Wallet,
      label: "Payroll",
      path: "/payroll",
    },
    {
      icon: Building2,
      label: "Departments",
      path: "/departments",
    },
    {
      icon: BarChart3,
      label: "Reports",
      path: "/reports",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
    },
  ],

  // =========================
  // FINANCE MANAGER
  // =========================
  financeManager: [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: ArrowDownUp,
      label: "Transactions",
      path: "/finance/transactions",
    },
    {
      icon: PiggyBank,
      label: "Budget",
      path: "/finance/budget",
    },
    {
      icon: BarChart3,
      label: "Reports",
      path: "/finance/reports",
    },
    {
      icon: Users,
      label: "Employees",
      path: "/finance/employees",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
    },
  ],

  // =========================
  // ACADEMIC MANAGER
  // =========================
  academicManager: [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: GraduationCap,
      label: "Academic",
      path: "/academic",
    },
    {
      icon: CalendarDays,
      label: "Attendance",
      path: "/academic/attendance",
    },
    {
      icon: Trophy,
      label: "Performance",
      path: "/academic/performance",
    },
    {
      icon: UserRound,
      label: "Faculty",
      path: "/academic/faculty",
    },
    {
      icon: BarChart3,
      label: "Reports",
      path: "/academic/reports",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
    },
  ],

  // =========================
  // HR MANAGER
  // =========================
  hrManager: [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: Users,
      label: "Employees",
      path: "/hr/employees",
    },
    {
      icon: UserPlus,
      label: "Add Employees",
      path: "/hr/invite-employee",
    },
    {
      icon: CalendarDays,
      label: "Attendance",
      path: "/hr/attendance",
    },
    {
      icon: FileText,
      label: "Leaves",
      path: "/hr/leaves",
    },
    {
      icon: Wallet,
      label: "Payroll",
      path: "/hr/payroll",
    },
    {
      icon: Building2,
      label: "Departments",
      path: "/hr/departments",
    },
    {
      icon: ClipboardCheck,
      label: "Performance",
      path: "/hr/performance",
    },
    {
      icon: UserCheck,
      label: "Recruitment",
      path: "/hr/recruitment",
    },
    {
      icon: BarChart3,
      label: "Reports",
      path: "/hr/reports",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
    },
  ],

  // =========================
  // NORMAL EMPLOYEE
  // =========================
  employee: [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: CalendarDays,
      label: "My Attendance",
      path: "/my-attendance",
    },
    {
      icon: FileText,
      label: "Leave Request",
      path: "/leave-request",
    },
    {
      icon: User,
      label: "Profile",
      path: "/profile",
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
    },
  ],
};


// =====================================================
// GET MENU BASED ON USER
// =====================================================

export const getMenu = (user) => {
  if (!user) {
    return [];
  }

  // =========================
  // ADMIN
  // =========================
  if (user.role === "admin") {
    return menus.admin;
  }

  // =========================
  // MANAGER
  // =========================
  if (user.role === "manager") {
    const departmentName =
      user.department?.name?.trim().toLowerCase();

    if (departmentName === "finance") {
      return menus.financeManager;
    }

    if (departmentName === "academic") {
      return menus.academicManager;
    }

    if (
      departmentName === "human resources" ||
      departmentName === "hr"
    ) {
      return menus.hrManager;
    }

    return [];
  }

  // =========================
  // EMPLOYEE
  // =========================
  return menus.employee;
};