import React, { useState } from "react";

import PayrollHeader from "../../components/payrollCompo/PayrollHeader";
import PayrollStats from "../../components/payrollCompo/PayrollStats";
import PayrollFilters from "../../components/payrollCompo/PayrollFilters";
import PayrollTable from "../../components/payrollCompo/PayrollTable";
import PayrollPagination from "../../components/payrollCompo/PayrollPagination";

import GeneratePayrollModal from "../../components/payrollCompo/GeneratePayrollModal";
import SalarySlipModal from "../../components/payrollCompo/SalarySlipModal";
const Payroll = () => {
  // =========================
  // States
  // =========================

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");
  const [month, setMonth] = useState("August 2026");

  const [currentPage, setCurrentPage] = useState(1);

  const [showGenerateModal, setShowGenerateModal] =
    useState(false);

  const [showSalarySlipModal, setShowSalarySlipModal] =
    useState(false);

  const [selectedEmployee, setSelectedEmployee] =
    useState(null);

  // =========================
  // Dummy Payroll Data
  // Later API se aayega
  // =========================

  const [payrolls] = useState([
    {
      id: "1",
      employeeId: "EMP001",
      employeeName: "Aaditya Bhatt",
      department: "Software Development",
      designation: "Software Engineer",
      basicSalary: 40000,
      allowances: 5000,
      deductions: 2500,
      netSalary: 42500,
      status: "Paid",
    },

    {
      id: "2",
      employeeId: "EMP002",
      employeeName: "Rahul Sharma",
      department: "Finance",
      designation: "Finance Manager",
      basicSalary: 50000,
      allowances: 6000,
      deductions: 3000,
      netSalary: 53000,
      status: "Pending",
    },

    {
      id: "3",
      employeeId: "EMP003",
      employeeName: "Priya Singh",
      department: "Human Resources",
      designation: "HR Manager",
      basicSalary: 48000,
      allowances: 5000,
      deductions: 2500,
      netSalary: 50500,
      status: "Processing",
    },

    {
      id: "4",
      employeeId: "EMP004",
      employeeName: "Rohan Verma",
      department: "Marketing",
      designation: "Marketing Executive",
      basicSalary: 35000,
      allowances: 4000,
      deductions: 1500,
      netSalary: 37500,
      status: "Paid",
    },
  ]);

  // =========================
  // Stats
  // =========================

  const stats = {
    totalPayroll: payrolls.reduce(
      (total, payroll) =>
        total + payroll.netSalary,
      0
    ),

    totalEmployees: payrolls.length,

    paidEmployees: payrolls.filter(
      (payroll) => payroll.status === "Paid"
    ).length,

    pendingEmployees: payrolls.filter(
      (payroll) => payroll.status === "Pending"
    ).length,

    processingEmployees: payrolls.filter(
      (payroll) => payroll.status === "Processing"
    ).length,
  };

  // =========================
  // Filtering
  // =========================

  const filteredPayrolls = payrolls.filter(
    (payroll) => {
      const searchMatch =
        payroll.employeeName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        payroll.employeeId
          .toLowerCase()
          .includes(search.toLowerCase());

      const departmentMatch =
        department === "All" ||
        payroll.department === department;

      const statusMatch =
        status === "All" ||
        payroll.status === status;

      return (
        searchMatch &&
        departmentMatch &&
        statusMatch
      );
    }
  );

  // =========================
  // View Salary Slip
  // =========================

  const handleViewSalarySlip = (employee) => {
    setSelectedEmployee(employee);
    setShowSalarySlipModal(true);
  };

  // =========================
  // Generate Payroll
  // =========================

  const handleGeneratePayroll = () => {
    setShowGenerateModal(true);
  };

  // =========================
  // Page
  // =========================

  return (
    <div className="min-h-screen bg-slate-100 p-6 space-y-6">

      {/* Header */}

      <PayrollHeader
        title="Payroll"
        subtitle="Manage employee payroll and salary records"
        onGenerate={handleGeneratePayroll}
      />


      {/* Stats */}

      <PayrollStats
        stats={stats}
      />


      {/* Filters */}

      <PayrollFilters
        search={search}
        setSearch={setSearch}

        department={department}
        setDepartment={setDepartment}

        status={status}
        setStatus={setStatus}

        month={month}
        setMonth={setMonth}

        setCurrentPage={setCurrentPage}
      />


      {/* Table */}

      <PayrollTable
        payrolls={filteredPayrolls}
        loading={false}
        onView={handleViewSalarySlip}
      />


      {/* Pagination */}

      <PayrollPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />


      {/* Generate Payroll Modal */}

      {showGenerateModal && (
        <GeneratePayrollModal
          month={month}
          onClose={() =>
            setShowGenerateModal(false)
          }
        />
      )}


      {/* Salary Slip Modal */}

      {showSalarySlipModal && (
        <SalarySlipModal
          employee={selectedEmployee}
          onClose={() =>
            setShowSalarySlipModal(false)
          }
        />
      )}

    </div>
  );
};

export default Payroll;