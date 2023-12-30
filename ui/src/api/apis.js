import api from "./api";
export const API = {
  getAllUsers: (payload) => api.get("user/getAllUsers", payload),
  postRegister: (payload) => api.post("user/register", payload),
};
