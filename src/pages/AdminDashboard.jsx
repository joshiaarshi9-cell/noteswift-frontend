import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";
import InviteEmployeeForm from "../components/admin/InviteEmployeeForm";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <Topbar />

        <div className="bg-white rounded-2xl p-8 mt-6 shadow">
          <h2 className="text-2xl font-bold mb-6">
            Invite your Employee
          </h2>

          <InviteEmployeeForm />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;