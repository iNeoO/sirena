import type { User } from "@/types/user.d.ts";

export const getUser = async (): Promise<User> => {
  return new Promise((resolve) => {
    resolve({
      id: "1",
      email: "nom@domain.fr",
      username: "nom",
      password: "password",
    });
  });
};
