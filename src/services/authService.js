import api from "../api/axios";

// Login
export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

// Register (Employee registration using invitation)
export const register = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

// Logout
export const logout = async () => {
  const response = await api.post("/auth/logout");
  return response.data;
};