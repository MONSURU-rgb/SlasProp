import { builder } from "@/builder";
import { useQuery } from "@tanstack/react-query";

export function useGetProfile() {
  return useQuery({
    queryKey: builder.user.profile.$get(),
    queryFn: builder.$use.user.profile,
  });
}
