"use client";

import { useActionState } from "react";
import type { MagicLinkState } from "@/app/admin/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  action: (state: MagicLinkState, formData: FormData) => Promise<MagicLinkState>;
  linkError?: boolean;
}

export function LoginForm({ action, linkError = false }: LoginFormProps) {
  const [state, formAction, pending] = useActionState(action, { status: "idle" });
  const message = state.message ?? (linkError ? "That sign-in link is invalid or expired. Request a new one." : undefined);

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required disabled={pending} />
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send sign-in link"}
      </Button>
      {message ? (
        <p role="status" className={state.status === "error" || (linkError && state.status === "idle") ? "text-sm text-destructive" : "text-sm text-muted-foreground"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
