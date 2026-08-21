import { Eye, SquarePen } from "lucide-react";

const PayrollRow = ({ employee }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Processing":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

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