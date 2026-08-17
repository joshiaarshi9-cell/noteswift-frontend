import Header from "../../components/common/Header";
import AttendanceFilters from "../../components/attendanceCompo/AttendanceFilters";
import AttendanceTable from "../../components/attendanceCompo/AttendanceTable";
import Pagination from "../../components/common/Pagination";


import { useContext, useEffect, useState } from "react";
import { getEmployees } from "../../services/employeeServies";
import { getALLEmployees } from "../../Data/employees";
import { getTodayAttendance } from "../../services/attendenceServices";
import StatsCards from "../../components/common/StatsCards";


import { getDashboardSummary } from "../../services/dashboardSummary";
import { getDashboardStats } from "../../Data/statsCards";


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

      <Header
        title="Attendance"
        subtitle="Manage employee attendance records"
        titleClassName="text-5xl font-extrabold tracking-tight text-white"
        subtitleClassName="mt-2 text-lg text-blue-100/90 font-normal"
        rightContent={
          <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
            Export
          </button> }
        />
        

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

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};

export default Attendance;