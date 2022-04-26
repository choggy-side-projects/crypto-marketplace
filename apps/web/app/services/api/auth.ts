import { apiClient } from "./client";

export const register = async (email: string, password: string) => {
  return await apiClient<undefined>({
    path: "/auth/register",
    method: "POST",
    body: {
      email,
      password,
    },
  });
};

export const login = async (email: string, password: string) => {
  return await apiClient<{ token: string }>({
    path: "/auth/login",
    method: "POST",
    body: {
      email,
      password,
    },
  });
};
