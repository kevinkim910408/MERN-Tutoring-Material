import { useMutation } from "@tanstack/react-query";
import { API } from "../apis";

const __register = async (payload) => {
  const login = await API.postRegister(payload);
  return login;
};

export const usePostRegister = () => {
  return useMutation({
    mutationFn: __register,
    onSuccess: () => {},
    onError: () => {},
  });
};
