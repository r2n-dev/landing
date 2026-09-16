import type { EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import { createAuthClient } from "@/lib/supabase/auth";

/** Completes magic-link sign-in and sends the owner to the admin page. */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  const supabase = await createAuthClient();
  const { error } = code
    ? await supabase.auth.exchangeCodeForSession(code)
    : tokenHash && type
      ? await supabase.auth.verifyOtp({ token_hash: tokenHash, type })
      : { error: new Error("Missing sign-in code") };

  const target = error ? "/admin/login?error=link" : "/admin";
  // Behind the production proxy, the public host arrives in x-forwarded-host.
  const forwardedHost = request.headers.get("x-forwarded-host");
  const origin = forwardedHost
    ? `${request.headers.get("x-forwarded-proto") ?? "https"}://${forwardedHost}`
    : request.nextUrl.origin;
  return NextResponse.redirect(new URL(target, origin));
}
