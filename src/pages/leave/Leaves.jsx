import { useState, useEffect } from "react";

import LeaveFilters from "../../components/leaveCompo/LeaveFilters";
import LeaveTable from "../../components/leaveCompo/LeaveTable";
import Pagination from "../../components/common/Pagination";
import Header from "../../components/common/Header";
import StatsCards from "../../components/common/StatsCards";
import { getLeaveStats } from "../../Data/statsCards";
import { approveLeave, getAllLeaves, getLeaveSummary, reject } from "../../services/leaveService";
import { useEmployee } from "../../context/EmployeeContext";

import toast from "react-hot-toast";

const Leaves = () => {

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [leaveType, setLeaveType] = useState("");
  const [status, setStatus] = useState("Pending");
  const [currentPage, setCurrentPage] = useState(1);


  const [summary, setSummary] = useState(null);

  const [leaves, setLeaves] = useState([]);

  const { employees, loading } = useEmployee();

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


  const fetchLeaves = async () => {
    try {
      const data = await getAllLeaves({
        search,
        department,
        leaveType,
        status,
      });

      console.log("FILTERED LEAVES RESPONSE:", data);

      setLeaves(data.leaves ?? []);
    } catch (error) {
      console.log("LEAVE ERROR:", error);
    }
  };

  useEffect(() => {
    if (loading) return;

    fetchLeaves();
  }, [search, department, leaveType, status, loading]);

  const stats = getLeaveStats(summary);


  const ApproveTheLeave = async (_id) => {
    try {
      const data = await approveLeave(_id);

      toast.success(data.message);

      await fetchLeaves();

    } catch (error) {
      console.log("error while approving leave", error);

      toast.error(
        error.response?.data?.message || "Failed to approve leave"
      );
    }
  };

  console.log("mergered employed", leaves);

  const rejectLeave = async(_id) => {
    try {
      const data = await reject(_id);

      toast.success("data.message");
      await fetchLeaves();
    } catch (error) {
      console.log("while rejecting", error.message)
    }
  }



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
        employees={employees}
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


      <LeaveTable leaves={leaves} ApproveTheLeave={ApproveTheLeave} rejectLeave={rejectLeave} />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};

export default Leaves;