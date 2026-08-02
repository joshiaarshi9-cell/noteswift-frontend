const AttendanceModal = ({
  isOpen,
  onClose
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-6 w-full max-w-md">

        <h2 className="text-xl font-bold mb-4">
          Mark Attendance
        </h2>


        <input
          type="text"
          placeholder="Employee Name"
          className="w-full border rounded-xl px-4 py-3 mb-3"
        />


        <select className="w-full border rounded-xl px-4 py-3 mb-4">
          <option>Present</option>
          <option>Absent</option>
          <option>Late</option>
        </select>


        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-200"
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 rounded-xl bg-blue-600 text-white"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
};

export default AttendanceModal;