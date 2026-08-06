import { useState, useEffect } from "react";

import LeaveFilters from "../../components/leaveCompo/LeaveFilters";
import LeaveTable from "../../components/leaveCompo/LeaveTable";
import Pagination from "../../components/common/Pagination";
import Header from "../../components/common/Header";
import StatsCards from "../../components/common/StatsCards";
import { getLeaveStats } from "../../Data/statsCards";
import { getLeaveSummary } from "../../services/leaveService";

const Leaves = () => {

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const data = await getLeaveSummary();

        setSummary(data.summary);

      } catch (error) {
        console.log(error);
      }
    };

    fetchSummary();
  }, []);

  const stats = getLeaveStats(summary);

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <Header
        title="Leave Management"
        subtitle="Manage employee leave requests"
        titleClassName="text-5xl font-extrabold tracking-tight text-white"
        subtitleClassName="mt-2 text-lg text-blue-100/90 font-normal"
        rightContent={
          <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
            Export
          </button>}
      />

      {/* <LeaveStats /> */}
      <StatsCards stats={stats} />

      <LeaveFilters
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        leaveType={leaveType}
        setLeaveType={setLeaveType}
        status={status}
        setStatus={setStatus}
        setCurrentPage={setCurrentPage}
      />

      <LeaveTable />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};

export default Leaves;