import Link from "next/link";
import { ResumeAdmin } from "@/components/admin/ResumeAdmin";
import { andresProfileData } from "@/components/landing/profile-data";
import { Button } from "@/components/ui/button";
import { requireAdminUser } from "@/lib/admin/session";
import { RESUME_SCHEMA_VERSION, resumeDataSchema } from "@/lib/resume/schema";
import { createAuthClient } from "@/lib/supabase/auth";
import { signOut } from "./actions";

export const dynamic = "force-dynamic";

const HISTORY_LIMIT = 30;

export default async function AdminPage() {
  const user = await requireAdminUser();
  const supabase = await createAuthClient();

  const [{ data: versions, error: versionsError }, { data: latest, error: latestError }] = await Promise.all([
    supabase.from("resume_versions").select("id, note, created_at").order("id", { ascending: false }).limit(HISTORY_LIMIT),
    supabase.from("resume_versions").select("id, data, schema_version").order("id", { ascending: false }).limit(1).maybeSingle(),
  ]);
  const loadError = versionsError ?? latestError;
  const parsedLatest = latest?.schema_version === RESUME_SCHEMA_VERSION ? resumeDataSchema.safeParse(latest.data) : null;

  return (
    <main className="mx-auto flex max-w-page flex-col gap-6 px-4 py-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-h2">Resume admin</h1>
          <p className="text-sm text-muted-foreground">Signed in as {user.email}</p>
        </div>
        <div className="flex gap-2">
          <Button asChild variant="outline">
            <Link href="/">View site</Link>
          </Button>
          <form action={signOut}>
            <Button type="submit" variant="ghost">
              Sign out
            </Button>
          </form>
        </div>
      </header>

      {loadError || (latest && !parsedLatest?.success) ? (
        <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {loadError
            ? `Could not load resume versions: ${loadError.message}`
            : `The live version ${latest?.id} doesn't match the current schema; the draft starts from profile-data.ts.`}
        </p>
      ) : null}

      <ResumeAdmin
        published={parsedLatest?.success ? parsedLatest.data : andresProfileData}
        publishedVersionId={latest?.id ?? null}
        versions={(versions ?? []).map((version) => ({ id: version.id, note: version.note, createdAt: version.created_at }))}
      />
    </main>
  );
}
