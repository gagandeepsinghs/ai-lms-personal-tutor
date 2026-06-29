import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export type Role = "ADMIN" | "INSTRUCTOR" | "STUDENT";

export const checkRole = async (role: Role) => {
  const { sessionClaims } = await auth();
  return sessionClaims?.metadata?.role === role;
};

export const requireRole = async (role: Role) => {
  const isAuthorized = await checkRole(role);
  if (!isAuthorized) {
    redirect("/dashboard");
  }
};
