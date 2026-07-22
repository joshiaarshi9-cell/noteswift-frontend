import WelcomeCard from "../../components/dashboardCommon/WelcomeCard"


const Dashboard = () => {
  // const { user } = useAuth();

  return (
    <div className="space-y-6">

      {/* Common */}
      <WelcomeCard />

      {/* <WelcomeCard user={user} /> */}

      {/* Common */}
      {/* <QuickStats role={user.role} /> */}

      {/* Admin + HR */}
      {/* {(user.role === "admin" || user.role === "hr") && (
        <AttendanceOverview />
      )} */}

      {/* Admin Only */}
      {/* {user.role === "admin" && (
        <DepartmentSummary />
      )} */}

      {/* Admin + HR */}
      {/* {(user.role === "admin" || user.role === "hr") && (
        <RecentEmployees />
      )} */}

      {/* Employee Only */}
      {/* {user.role === "employee" && (
        <MyAttendance />
      )} */}

      {/* Employee Only */}
      {/* {user.role === "employee" && (
        <LeaveBalance />
      )} */}

      {/* Common */}
      {/* <Announcements /> */}

    </div>
  );
};

export default Dashboard;