import { Mail, Lock, EyeOff, ShieldCheck, ArrowRight } from "lucide-react";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center bg-white px-8 py-12 lg:px-16">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.jpeg"
            alt="Noteswift Logo"
            className="w-24 h-24 object-contain border rounded-full p-4"
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center text-slate-900">
          Welcome Back!
        </h1>

        <p className="text-center text-gray-500 mt-3 text-lg">
          Sign in to continue to the
          <br />
          Attendance Management System
        </p>

        {/* Email */}
        <div className="mt-10">
          <label className="font-semibold text-gray-700">
            Email Address
          </label>

          <div className="mt-2 flex items-center border rounded-xl px-4 h-14">
            <Mail size={20} className="text-gray-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="ml-3 w-full outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-6">
          <label className="font-semibold text-gray-700">
            Password
          </label>

          <div className="mt-2 flex items-center border rounded-xl px-4 h-14">
            <Lock size={20} className="text-gray-400" />

            <input
              type="password"
              placeholder="Enter your password"
              className="ml-3 w-full outline-none"
            />

            <EyeOff
              size={20}
              className="text-gray-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Remember */}
        <div className="flex justify-between items-center mt-6">

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span className="text-gray-600">
              Remember me
            </span>
          </label>

          <button className="text-blue-600 font-medium hover:underline">
            Forgot password?
          </button>

        </div>

        {/* Sign In Button */}
        <button
          className="
          w-full
          h-14
          mt-8
          rounded-xl
          bg-gradient-to-r
          from-blue-700
          to-blue-500
          text-white
          font-semibold
          text-xl
          flex
          justify-center
          items-center
          gap-3
          hover:scale-[1.02]
          duration-300
          "
        >
          Sign In
          <ArrowRight size={22} />
        </button>

        {/* Divider */}

        <div className="flex items-center my-8">
          <div className="flex-1 border-t"></div>

          <span className="mx-4 text-gray-500">
            or
          </span>

          <div className="flex-1 border-t"></div>
        </div>

        {/* Admin Button */}

        <button
          className="
          w-full
          h-14
          rounded-xl
          border-2
          border-blue-300
          flex
          justify-center
          items-center
          gap-3
          font-semibold
          text-lg
          hover:bg-blue-50
          "
        >
          <ShieldCheck
            size={20}
            className="text-blue-600"
          />

          Sign in as Admin

        </button>

        {/* Footer */}

        <p className="text-center text-gray-500 mt-10">
          Need access? Contact your{" "}
          <span className="text-blue-600 cursor-pointer">
            system administrator
          </span>
        </p>

        <p className="text-center text-gray-400 mt-8 text-sm">
          © 2025 Noteswift. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default LoginForm;