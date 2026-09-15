import type { User } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { createAuthClient } from "@/lib/supabase/auth";

export function isAdminEmail(email: string | null | undefined): boolean {
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  return Boolean(adminEmail && email && email.trim().toLowerCase() === adminEmail);
}

/** The signed-in user when it is the site owner, otherwise null. */
export async function getAdminUser(): Promise<User | null> {
  const supabase = await createAuthClient();
  // getUser() validates the session with Supabase instead of trusting the cookie.
  const { data } = await supabase.auth.getUser();
  return isAdminEmail(data.user?.email) ? data.user : null;
}

export async function requireAdminUser(): Promise<User> {
  const user = await getAdminUser();
  if (!user) {
    redirect("/admin/login");
  }
  return user;
}
