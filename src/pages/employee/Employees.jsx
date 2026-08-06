


import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import Pagination from "../../components/common/Pagination";
import StatsCards from "../../components/common/StatsCards";
import EmployeeFilters from "../../components/employeesCompo/EmployeeFilters"
import EmployeeTable from "../../components/employeesCompo/EmployeeTable";
import EmployeeCard from "../../components/employeesCompo/EmployeeCard";

import { getEmployees } from "../../services/employeeServies"


const Employee = () => {
  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data.employees);
        console.log(employees)

      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployees();
  }, []);

  // useEffect(() => {
  //   const fetchSummary = async () => {
  //     try {
  //       const data = await getEmployeeSummary();
  //       setSummary(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchSummary();
  // }, []);

  // const stats = getEmployeeStats(summary);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <Header
        title="Employee Management"
        subtitle="Manage employees and their information"
        titleClassName="text-5xl font-extrabold tracking-tight text-white"
        subtitleClassName="mt-2 text-lg text-blue-100/90 font-normal"
        rightContent={
          <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
            Add Employee
          </button>
        }
      />

      {/* <StatsCards  /> */}

      <EmployeeFilters
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        status={status}
        setStatus={setStatus}
        setCurrentPage={setCurrentPage}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee._id}
            employee={employee}
          />
        ))}
      </div>
      
      <EmployeeTable employees={employees} /> 

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Employee;