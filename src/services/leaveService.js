import api from "../api/axios"

export const getLeaveSummary = async (status = "all") => {
  const res = await api.get("/leave/summary", {
    params: { status },
  });

  return res.data;
};

export const getAllLeaves = async ({
  search = "",
  department = "",
  leaveType = "",
  status = "Pending",
}) => {
  const res = await api.get("/leave", {
    params: {
      search,
      department,
      leaveType,
      status,
    },
  });

  return res.data;
};

export const approveLeave = async (id) => {
  const res = await api.patch(`leave/${id}/approve`, {
    params: { status },
  })
  return res.data;
}


export const reject = async(id) => {
  const res = await api.patch(`leave/${id}/reject`,{
    params:{ status },
  })
  return res.data;
}