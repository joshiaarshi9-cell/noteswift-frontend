import api from "../api/axios"; // ya "../utils/axios" jo bhi tera path hai

export const sendInvitation = async (data) => {
  const response = await api.post("/invitations/send", data);
  return response.data;
};


export const validateInvitation = async (token) => {
  const response = await api.get(`/invitations/validate?token=${token}`);
  return response.data;
};


export const registerInvitation = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};