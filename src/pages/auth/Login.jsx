import LeftPanel from "../../components/loginCompo/LeftPanel";
import LoginForm from "../../components/loginCompo/LoginForm";


const Login = () => {
  return (
    <div className="min-h-screen bg-[#eef5ff] flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        <LeftPanel />

        <LoginForm />

      </div>
    </div>
  );
};

export default Login;