import api from "../api/axios";

export const getDashboardSummary = async () => {
  const response = await api.get("/dashboard/summary", {});

  return response.data.summary;
};



export const getAttendanceOverview = async (range = "1m") => {
  const res = await api.get("/dashboard/attendance-overview", {
    params: { range },
  });

  return res.data;
};