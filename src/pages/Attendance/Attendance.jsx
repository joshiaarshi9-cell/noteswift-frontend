import AttendanceHeader from "../../components/attendanceCompo/AttendanceHeader";
import AttendanceFilters from "../../components/attendanceCompo/AttendanceFilters";
import AttendanceTable from "../../components/attendanceCompo/AttendanceTable";
import AttendancePagination from "../../components/attendanceCompo/AttendancePagination";

import { useEffect, useState } from "react";
import { getEmployees } from "../../services/employeeServies";
import { getALLEmployees } from "../../Data/employees";
import { getTodayAttendance } from "../../services/attendenceServices";
import StatsCards from "../../components/dashboardCommon/StatsCards";


import { getDashboardSummary } from "../../services/dashboardSummary";
import { getDashboardStats } from "../../Data/dashboardStats";


const Attendance = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const [summary, setSummary] = useState(null);



  const fetchEmployees = async () => {
    try {
      setLoading(true);

      const employeesData = await getEmployees({
        search: debouncedSearch,
        department,
        // role,
        // status,
        page: currentPage,
        limit: 10,
      });
      const attendanceData = await getTodayAttendance();

      const mergedEmployees = employeesData.employees.map((emp) => {
        const attendance = attendanceData.attendance.find(
          (att) => att.employee._id === emp._id
        );

        return {
          ...emp,
          status: attendance?.status || "Absent",
          checkIn: attendance?.checkIn || null,
          checkOut: attendance?.checkOut || null
        };
      });

      setEmployees(mergedEmployees);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    fetchEmployees();
  }, [debouncedSearch, department, currentPage]);



  getALLEmployees(employees)  

  const fetchSummary = async () => {
    try {
      const data = await getDashboardSummary();
      setSummary(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, [employees]);

  const stats = getDashboardStats(summary);


  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <AttendanceHeader />

      <StatsCards stats={stats} />

      <AttendanceFilters
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        setCurrentPage={setCurrentPage}
        employees={employees}
      />


      <AttendanceTable
        employees={employees}
        setEmployees={setEmployees}
        loading={loading}
        fetchEmployees={fetchEmployees}

      />

      <AttendancePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};

export default Attendance;