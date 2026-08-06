import {
  Users,
  UserCheck,
  CalendarDays,
  UserX,

  CircleCheckBig,
  Clock3,
  CircleX,
} from "lucide-react";

export const getDashboardStats = (summary) => [
  {
    title: "Total Employees",
    value: summary?.totalEmployees ?? 0,
    subtitle: "Active employees",
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    border: "border-blue-200",
    valueColor: "text-blue-600",
    subColor: "text-gray-500",
  },
  {
    title: "Present Today",
    value: summary?.presentToday ?? 0,
    subtitle: `${summary?.attendancePercentage ?? 0}% attendance today`,
    icon: UserCheck,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    border: "border-green-200",
    valueColor: "text-green-600",
    subColor: "text-green-600",
  },
  {
    title: "On Leave",
    value: summary?.onLeave ?? 0,
    subtitle: "Approved leave today",
    icon: CalendarDays,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    border: "border-orange-200",
    valueColor: "text-orange-500",
    subColor: "text-gray-500",
  },
  {
    title: "Absent Today",
    value: summary?.absentToday ?? 0,
    subtitle: "Not checked in today",
    icon: UserX,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    border: "border-red-200",
    valueColor: "text-red-500",
    subColor: "text-gray-500",
  },
];


export const getLeaveStats = (summary) => [
  {
    title: "Total Requests",
    value: summary?.total || 0,
    subtitle: "All leave requests",
    icon: CalendarDays,
    border: "border-blue-200",
    valueColor: "text-blue-600",
    subColor: "text-blue-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },

  {
    title: "Approved",
    value: summary?.approved || 0,
    subtitle: "Approved requests",
    icon: CircleCheckBig,
    border: "border-green-200",
    valueColor: "text-green-600",
    subColor: "text-green-500",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },

  {
    title: "Pending",
    value: summary?.pending || 0,
    subtitle: "Waiting for approval",
    icon: Clock3,
    border: "border-orange-200",
    valueColor: "text-orange-600",
    subColor: "text-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },

  {
    title: "Rejected",
    value: summary?.rejected || 0,
    subtitle: "Rejected requests",
    icon: CircleX,
    border: "border-red-200",
    valueColor: "text-red-600",
    subColor: "text-red-500",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
];