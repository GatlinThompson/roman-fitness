import { createClient } from "../server";

export type UserRole = "admin" | "user";

export const getUserRole = async (): Promise<UserRole | null> => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data } = await supabase
    .from("users")
    .select("role")
    .eq("user_id", user.id)
    .single();

  return (data?.role as UserRole) ?? null;
};

export const checkIsAdmin = async (): Promise<boolean> => {
  const role = await getUserRole();
  return role === "admin";
};
