import api from "../api/axios"

export const getLeaveSummary = async (status = "all") => {
  const res = await api.get("/leave/summary", {
    params: { status },
  });

  return res.data;
};