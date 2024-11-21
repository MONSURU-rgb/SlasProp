import { builder } from "@/builder";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetRoles() {
  return useQuery({
    queryKey: builder.user.roles.$get(),
    queryFn: builder.$use.user.roles,
    select: ({ data }) => data,
  });
}

export function useCreateRoles() {
  return useMutation({
    mutationKey: builder.role.$get(),
    mutationFn: builder.$use.role.post,
  });
}
