import { redirect } from "next/navigation";
import { LoginForm } from "@/components/admin/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAdminUser } from "@/lib/admin/session";
import { sendMagicLink } from "../actions";

export default async function AdminLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (await getAdminUser()) {
    redirect("/admin");
  }
  const { error } = await searchParams;

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-4 py-10">
      <Card padding="lg">
        <CardHeader>
          <CardTitle>Resume admin</CardTitle>
          <CardDescription>Sign in with a one-time link sent to your email.</CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          <LoginForm action={sendMagicLink} linkError={error === "link"} />
        </CardContent>
      </Card>
    </main>
  );
}
