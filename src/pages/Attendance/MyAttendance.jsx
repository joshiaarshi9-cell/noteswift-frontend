import React, { useMemo, useState } from "react";

import MyAttendanceHeader from "../../components/myAttendanceCompo/MyAttendanceHeader";
import AttendanceSummary from "../../components/myAttendanceCompo/AttendanceSummary";
import AttendanceFilters from "../../components/myAttendanceCompo/AttendanceFilters";
import AttendanceChart from "../../components/myAttendanceCompo/AttendanceChart";
import AttendanceTable from "../../components/myAttendanceCompo/AttendanceTable";
import AttendancePagination from "../../components/myAttendanceCompo/AttendancePagination";

const MyAttendance = () => {
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("2026-08");
  const [status, setStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  const attendanceData = [
    {
      id: 1,
      date: "31 Aug 2026",
      checkIn: "09:30 AM",
      checkOut: "04:30 PM",
      workingHours: "7h 00m",
      status: "Present",
    },
    {
      id: 2,
      date: "30 Aug 2026",
      checkIn: "09:45 AM",
      checkOut: "04:30 PM",
      workingHours: "6h 45m",
      status: "Late",
    },
    {
      id: 3,
      date: "29 Aug 2026",
      checkIn: "09:25 AM",
      checkOut: "04:35 PM",
      workingHours: "7h 10m",
      status: "Present",
    },
    {
      id: 4,
      date: "28 Aug 2026",
      checkIn: "--",
      checkOut: "--",
      workingHours: "--",
      status: "Absent",
    },
    {
      id: 5,
      date: "27 Aug 2026",
      checkIn: "09:20 AM",
      checkOut: "04:40 PM",
      workingHours: "7h 20m",
      status: "Present",
    },
    {
      id: 6,
      date: "26 Aug 2026",
      checkIn: "09:35 AM",
      checkOut: "04:30 PM",
      workingHours: "6h 55m",
      status: "Present",
    },
    {
      id: 7,
      date: "25 Aug 2026",
      checkIn: "09:50 AM",
      checkOut: "04:30 PM",
      workingHours: "6h 40m",
      status: "Late",
    },
    {
      id: 8,
      date: "24 Aug 2026",
      checkIn: "09:28 AM",
      checkOut: "04:32 PM",
      workingHours: "7h 04m",
      status: "Present",
    },
    {
      id: 9,
      date: "23 Aug 2026",
      checkIn: "09:30 AM",
      checkOut: "04:30 PM",
      workingHours: "7h 00m",
      status: "Present",
    },
    {
      id: 10,
      date: "22 Aug 2026",
      checkIn: "--",
      checkOut: "--",
      workingHours: "--",
      status: "Absent",
    },
    {
      id: 11,
      date: "21 Aug 2026",
      checkIn: "09:40 AM",
      checkOut: "04:30 PM",
      workingHours: "6h 50m",
      status: "Late",
    },
    {
      id: 12,
      date: "20 Aug 2026",
      checkIn: "09:25 AM",
      checkOut: "04:35 PM",
      workingHours: "7h 10m",
      status: "Present",
    },
  ];

  const filteredAttendance = useMemo(() => {
    return attendanceData.filter((record) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        record.date.toLowerCase().includes(searchValue) ||
        record.status.toLowerCase().includes(searchValue);

      const matchesStatus =
        status === "All" || record.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredAttendance.length / recordsPerPage)
  );

  const paginatedAttendance = filteredAttendance.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleMonthChange = (value) => {
    setMonth(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearch("");
    setMonth("2026-08");
    setStatus("All");
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      <MyAttendanceHeader />

      <AttendanceSummary />

      <AttendanceFilters
        search={search}
        setSearch={handleSearchChange}
        month={month}
        setMonth={handleMonthChange}
        status={status}
        setStatus={handleStatusChange}
        onReset={handleReset}
      />

      <AttendanceChart />

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <AttendanceTable attendance={paginatedAttendance} />

        <AttendancePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={() =>
            setCurrentPage((page) => Math.max(1, page - 1))
          }
          onNext={() =>
            setCurrentPage((page) =>
              Math.min(totalPages, page + 1)
            )
          }
        />
      </div>
    </div>
  );
};

export default MyAttendance;