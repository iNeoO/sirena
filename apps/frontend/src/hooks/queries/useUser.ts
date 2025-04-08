import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/lib/api/fetchUser";

export const useUser = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(),
  });
