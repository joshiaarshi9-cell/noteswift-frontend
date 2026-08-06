import { useState } from "react";

import Header from "../../components/common/Header";

import PayrollStats from "../../components/payrollCompo/PayrollStats";
import PayrollFilters from "../../components/payrollCompo/PayrollFilters";
import PayrollTable from "../../components/payrollCompo/PayrollTable";
import PayrollPagination from "../../components/payrollCompo/PayrollPagination";

const Payroll = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [month, setMonth] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Backend se baad me aayega
  const payrolls = [];
  const loading = false;
  const stats = {};

  return (
    <div className="min-h-screen bg-slate-100 p-6 space-y-6">

      <Header
        title="Payroll"
        subtitle="Manage employee payroll and salary records"
        titleClassName="text-5xl font-bold"
        subtitleClassName="text-lg text-blue-100/90"
        rightContent={
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Export
          </button>
        }
      />

      <PayrollStats stats={stats} />

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

      <PayrollTable
        payrolls={payrolls}
        loading={loading}
      />

      <PayrollPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};

export default Payroll;