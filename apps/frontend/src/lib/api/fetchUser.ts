import type { paths } from "@/types/openapi";

type GetUserResponse =
  paths["/user"]["get"]["responses"]["200"]["content"]["application/json"];

export async function fetchUser() {
  const res = await fetch("/api/user");
  if (!res.ok) throw new Error("Failed to fetch user");
  const data = (await res.json()) as GetUserResponse;
  return data;
}
