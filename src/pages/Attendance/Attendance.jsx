import { useState } from "react";

import AttendanceHeader from "../../components/attendanceCompo/AttendanceHeader";
import AttendanceStats from "../../components/attendanceCompo/AttendanceStats";
import AttendanceFilters from "../../components/attendanceCompo/AttendanceFilters";
import AttendanceChart from "../../components/attendanceCompo/AttendanceChart";
import AttendanceTable from "../../components/attendanceCompo/AttendanceTable";
import AttendancePagination from "../../components/attendanceCompo/AttendancePagination";

const Attendance = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <AttendanceHeader />

      <AttendanceStats />

      <AttendanceFilters
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        setCurrentPage={setCurrentPage}
      />

      <AttendanceChart />

      <AttendanceTable />

      <AttendancePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};

export default Attendance;