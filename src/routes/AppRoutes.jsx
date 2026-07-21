import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;