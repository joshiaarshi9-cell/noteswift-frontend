import {
  LayoutDashboard,
  Users,
  CalendarDays,
  FileText,
  Building2,
  BarChart3,
  Settings,
  User,
} from "lucide-react";

export const menus = {
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
      icon: Users,
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

  hr: [
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
      icon: BarChart3,
      label: "Reports",
      path: "/reports",
    },
  ],

  employee: [
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