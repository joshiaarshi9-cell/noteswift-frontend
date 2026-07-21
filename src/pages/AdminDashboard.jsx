import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <Topbar />

        <div className="bg-white rounded-2xl shadow-sm border p-8">

          <h2 className="text-3xl font-bold mb-6">
            Invite your Employee
          </h2>

          <hr />

          <div className="mt-10 text-gray-500">
            Form will come here...
          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;