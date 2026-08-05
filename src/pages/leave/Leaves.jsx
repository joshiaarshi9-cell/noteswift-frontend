import { useState } from "react";

import LeaveHeader from "../../components/leaveCompo/LeaveHeader";
import LeaveStats from "../../components/leaveCompo/LeaveStats";
import LeaveFilters from "../../components/leaveCompo/LeaveFilters";
import LeaveTable from "../../components/leaveCompo/LeaveTable";
import LeavePagination from "../../components/leaveCompo/LeavePagination";

const Leaves = () => {

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [status, setStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <LeaveHeader />

      <LeaveStats />

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

      <LeavePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};

export default Leaves;