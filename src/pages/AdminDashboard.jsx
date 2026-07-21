import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";
import InviteEmployeeForm from "../components/admin/InviteEmployeeForm";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FC] flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-10 py-8">
        <Topbar />

        {/* White Card */}
        <div className="mt-8 bg-white rounded-[24px] shadow-lg border border-gray-100 px-10 pt-10 pb-8 w-full">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-[36px] font-bold text-gray-900">
              Invite your Employee
            </h2>

            <p className="mt-2 text-gray-500 text-lg">
              Fill the employee details below.
            </p>
          </div>

          {/* Form */}
          <InviteEmployeeForm />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;