import { API } from "../apis";
import { useQuery } from "@tanstack/react-query";

export const useGetAllUsers = () => {
  const fetcher = async () => {
    const { data } = await API.getAllUsers();
    return data;
  };

  return useQuery({ queryKey: ["allUser"], queryFn: fetcher });
};
