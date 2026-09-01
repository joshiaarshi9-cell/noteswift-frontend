import React from "react";

const LeaveRequestModal = ({
  showModal,
  setShowModal,
  formData,
  setFormData,
  onSubmit,
}) => {
  if (!showModal) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4">
      
      {/* Modal */}
      <div className="bg-white w-full max-w-lg max-h-[95vh] sm:max-h-[90vh] rounded-xl sm:rounded-2xl shadow-xl overflow-hidden flex flex-col">

        {/* ================= HEADER ================= */}
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
            aria-label="Close modal"
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50 text-xl transition"
          >
            ×
          </button>

        </div>

        {/* ================= FORM ================= */}
        <form
          onSubmit={onSubmit}
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
                transition
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
            
            {/* From */}
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
                  transition
                "
              />
            </div>

            {/* To */}
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
                  transition
                "
              />
            </div>

          </div>

          {/* Leave Duration */}
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
                transition
              "
            />
          </div>

          {/* ================= BUTTONS ================= */}
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
  );
};

export default LeaveRequestModal;