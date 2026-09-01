import React, { useState } from "react";
import {
  CalendarDays,
  Clock3,
  CheckCircle2,
  XCircle,
  Plus,
} from "lucide-react";

const LeaveRequest = () => {
  const [showModal, setShowModal] = useState(false);

  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      leaveType: "Casual Leave",
      from: "2026-08-25",
      to: "2026-08-26",
      days: 2,
      reason: "Personal work",
      status: "Pending",
    },
    {
      id: 2,
      leaveType: "Sick Leave",
      from: "2026-08-18",
      to: "2026-08-18",
      days: 1,
      reason: "Not feeling well",
      status: "Approved",
    },
    {
      id: 3,
      leaveType: "Casual Leave",
      from: "2026-08-10",
      to: "2026-08-10",
      days: 1,
      reason: "Family function",
      status: "Rejected",
    },
  ]);

  const [formData, setFormData] = useState({
    leaveType: "Casual Leave",
    from: "",
    to: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateDays = () => {
    if (!formData.from || !formData.to) return 0;

    const fromDate = new Date(formData.from);
    const toDate = new Date(formData.to);

    const difference = toDate - fromDate;

    if (difference < 0) return 0;

    return Math.floor(difference / (1000 * 60 * 60 * 24)) + 1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const days = calculateDays();

    if (
      !formData.from ||
      !formData.to ||
      !formData.reason ||
      days === 0
    ) {
      return;
    }

    const newRequest = {
      id: Date.now(),
      leaveType: formData.leaveType,
      from: formData.from,
      to: formData.to,
      days,
      reason: formData.reason,
      status: "Pending",
    };

    setLeaveRequests((prev) => [newRequest, ...prev]);

    setFormData({
      leaveType: "Casual Leave",
      from: "",
      to: "",
      reason: "",
    });

    setShowModal(false);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-emerald-100 text-emerald-700 border border-emerald-200";

      case "Rejected":
        return "bg-rose-100 text-rose-700 border border-rose-200";

      default:
        return "bg-amber-100 text-amber-700 border border-amber-200";
    }
  };

  const getLeaveTypeStyle = (leaveType) => {
    switch (leaveType) {
      case "Sick Leave":
        return "bg-red-50 text-red-600";

      case "Casual Leave":
        return "bg-blue-50 text-blue-600";

      case "Earned Leave":
        return "bg-purple-50 text-purple-600";

      case "Emergency Leave":
        return "bg-orange-50 text-orange-600";

      default:
        return "bg-indigo-50 text-indigo-600";
    }
  };

  return (
    <div className="w-full min-w-0 max-w-full">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-7">

        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Leave Request
          </h1>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manage and track your leave requests
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="
            w-full
            sm:w-auto
            shrink-0
            flex
            items-center
            justify-center
            gap-2
            px-5
            py-2.5
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            rounded-lg
            text-sm
            font-medium
            transition
          "
        >
          <Plus size={18} />
          Apply Leave
        </button>
      </div>

      {/* =====================================================
          STATS
      ===================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-6">

        {/* Total Leaves */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">

            <div>
              <p className="text-sm text-gray-500">
                Total Leaves
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-1">
                12
              </h2>
            </div>

            <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
              <CalendarDays
                size={20}
                className="text-indigo-600"
              />
            </div>

          </div>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">

            <div>
              <p className="text-sm text-gray-500">
                Pending
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-1">
                {
                  leaveRequests.filter(
                    (item) => item.status === "Pending"
                  ).length
                }
              </h2>
            </div>

            <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
              <Clock3
                size={20}
                className="text-amber-600"
              />
            </div>

          </div>
        </div>

        {/* Approved */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">

            <div>
              <p className="text-sm text-gray-500">
                Approved
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-1">
                {
                  leaveRequests.filter(
                    (item) => item.status === "Approved"
                  ).length
                }
              </h2>
            </div>

            <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
              <CheckCircle2
                size={20}
                className="text-emerald-600"
              />
            </div>

          </div>
        </div>

        {/* Rejected */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">

            <div>
              <p className="text-sm text-gray-500">
                Rejected
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-1">
                {
                  leaveRequests.filter(
                    (item) => item.status === "Rejected"
                  ).length
                }
              </h2>
            </div>

            <div className="shrink-0 w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center">
              <XCircle
                size={20}
                className="text-rose-600"
              />
            </div>

          </div>
        </div>

      </div>

      {/* =====================================================
          LEAVE REQUEST TABLE
      ===================================================== */}
      <div className="w-full min-w-0 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">

        {/* Table Heading */}
        <div className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 border-b border-gray-100">

          <h2 className="text-lg font-semibold text-gray-800">
            My Leave Requests
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            View all your submitted leave requests
          </p>

        </div>

        {/* =====================================================
            HORIZONTAL TABLE SCROLL
        ===================================================== */}
        <div
          className="
            w-full
            max-w-full
            overflow-x-auto
            overflow-y-hidden
          "
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >

          <table className="w-[950px] min-w-[950px]">

            <thead>
              <tr className="bg-indigo-50/60 text-left">

                <th className="px-5 sm:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                  Leave Type
                </th>

                <th className="px-5 sm:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                  From
                </th>

                <th className="px-5 sm:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                  To
                </th>

                <th className="px-5 sm:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                  Days
                </th>

                <th className="px-5 sm:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                  Reason
                </th>

                <th className="px-5 sm:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                  Status
                </th>

                <th className="px-5 sm:px-6 py-4 text-xs font-semibold text-indigo-600 uppercase tracking-wide whitespace-nowrap">
                  Action
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">

              {leaveRequests.map((request) => (
                <tr
                  key={request.id}
                  className="hover:bg-indigo-50/30 transition"
                >

                  {/* Leave Type */}
                  <td className="px-5 sm:px-6 py-4 whitespace-nowrap">

                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${getLeaveTypeStyle(
                        request.leaveType
                      )}`}
                    >
                      {request.leaveType}
                    </span>

                  </td>

                  {/* From */}
                  <td className="px-5 sm:px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {request.from}
                  </td>

                  {/* To */}
                  <td className="px-5 sm:px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                    {request.to}
                  </td>

                  {/* Days */}
                  <td className="px-5 sm:px-6 py-4 whitespace-nowrap">

                    <span className="inline-flex items-center justify-center min-w-8 h-8 px-2 rounded-lg bg-indigo-50 text-indigo-600 text-sm font-semibold">
                      {request.days}
                    </span>

                  </td>

                  {/* Reason */}
                  <td className="px-5 sm:px-6 py-4">

                    <span
                      className="block max-w-[220px] truncate text-sm text-gray-600"
                      title={request.reason}
                    >
                      {request.reason}
                    </span>

                  </td>

                  {/* Status */}
                  <td className="px-5 sm:px-6 py-4 whitespace-nowrap">

                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                        request.status
                      )}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2" />

                      {request.status}
                    </span>

                  </td>

                  {/* Action */}
                  <td className="px-5 sm:px-6 py-4 whitespace-nowrap">

                    <button
                      type="button"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition"
                    >
                      View
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Empty State */}
        {leaveRequests.length === 0 && (
          <div className="text-center py-12 px-4">

            <div className="w-12 h-12 mx-auto rounded-full bg-indigo-50 flex items-center justify-center mb-3">
              <span className="text-xl">📋</span>
            </div>

            <p className="text-sm font-medium text-gray-700">
              No leave requests found
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Your submitted leave requests will appear here.
            </p>

          </div>
        )}

      </div>

      {/* =====================================================
          MODAL
      ===================================================== */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">

          <div className="bg-white w-full max-w-lg max-h-[95vh] sm:max-h-[90vh] rounded-xl sm:rounded-2xl shadow-xl overflow-hidden flex flex-col">

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100 shrink-0">

              <div className="min-w-0">

                <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                  Apply for Leave
                </h2>

                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Submit a new leave request
                </p>

              </div>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50 text-xl transition"
              >
                ×
              </button>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto"
            >

              {/* Leave Type */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Leave Type
                </label>

                <select
                  name="leaveType"
                  value={formData.leaveType}
                  onChange={handleChange}
                  className="
                    w-full
                    border border-gray-200
                    rounded-lg
                    px-4
                    py-2.5
                    text-sm
                    text-gray-700
                    bg-white
                    outline-none
                    focus:border-indigo-500
                    focus:ring-2
                    focus:ring-indigo-100
                  "
                >
                  <option>Casual Leave</option>
                  <option>Sick Leave</option>
                  <option>Earned Leave</option>
                  <option>Emergency Leave</option>
                </select>

              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    From
                  </label>

                  <input
                    type="date"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      border border-gray-200
                      rounded-lg
                      px-4
                      py-2.5
                      text-sm
                      text-gray-700
                      outline-none
                      focus:border-indigo-500
                      focus:ring-2
                      focus:ring-indigo-100
                    "
                  />

                </div>

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    To
                  </label>

                  <input
                    type="date"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      border border-gray-200
                      rounded-lg
                      px-4
                      py-2.5
                      text-sm
                      text-gray-700
                      outline-none
                      focus:border-indigo-500
                      focus:ring-2
                      focus:ring-indigo-100
                    "
                  />

                </div>

              </div>

              {/* Duration */}
              {calculateDays() > 0 && (
                <div className="bg-indigo-50 text-indigo-700 rounded-lg px-4 py-3 text-sm">

                  Leave duration:{" "}

                  <span className="font-semibold">
                    {calculateDays()} day
                    {calculateDays() > 1 ? "s" : ""}
                  </span>

                </div>
              )}

              {/* Reason */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason
                </label>

                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Enter reason for leave..."
                  className="
                    w-full
                    border border-gray-200
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    text-gray-700
                    placeholder:text-gray-400
                    outline-none
                    resize-none
                    focus:border-indigo-500
                    focus:ring-2
                    focus:ring-indigo-100
                  "
                />

              </div>

              {/* Buttons */}
              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2.5 sm:gap-3 pt-1 sm:pt-2">

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="
                    w-full
                    sm:w-auto
                    px-5
                    py-2.5
                    rounded-lg
                    border border-gray-200
                    text-sm
                    font-medium
                    text-gray-600
                    hover:bg-gray-50
                    transition
                  "
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
                    w-full
                    sm:w-auto
                    px-5
                    py-2.5
                    rounded-lg
                    bg-indigo-600
                    hover:bg-indigo-700
                    text-white
                    text-sm
                    font-medium
                    transition
                  "
                >
                  Submit Request
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
};

export default LeaveRequest;