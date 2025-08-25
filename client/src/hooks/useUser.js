import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";

export const useUser = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      // return api.get("/api/user").then((res) => res.data);
      const user = await fetch("https://dummyjson.com/users/5");
      return await user.json();
    },
  });

  return { data, isLoading, error, refetch };
};
