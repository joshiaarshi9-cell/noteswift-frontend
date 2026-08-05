const LeavePagination = ({
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex justify-between items-center mt-6">

      <button
        onClick={() =>
          setCurrentPage((prev) =>
            prev > 1 ? prev - 1 : 1
          )
        }
        className="px-5 py-2 bg-white border rounded-lg hover:bg-slate-100"
      >
        Previous
      </button>

      <span className="font-semibold text-slate-700">
        Page {currentPage}
      </span>

      <button
        onClick={() =>
          setCurrentPage((prev) => prev + 1)
        }
        className="px-5 py-2 bg-white border rounded-lg hover:bg-slate-100"
      >
        Next
      </button>

    </div>
  );
};

export default LeavePagination;