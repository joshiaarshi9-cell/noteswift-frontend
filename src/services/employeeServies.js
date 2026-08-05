import api from "../api/axios";

export const getEmployees = async (params = {}) => {
  const res = await api.get("/employee", {
    params,
  });

  return res.data;
};