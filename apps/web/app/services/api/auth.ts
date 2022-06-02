import { apiClient } from "./client";

export const register = async (email: string, password: string) => {
  return apiClient.post<undefined>("/auth/register", {
    email,
    password,
  });
};

export const login = async (email: string, password: string) => {
  return apiClient.post<{ token: string }>("/auth/login", {
    email,
    password,
  });
};
