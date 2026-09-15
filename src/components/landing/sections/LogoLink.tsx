import Link from "next/link";

interface LogoLinkProps {
  href?: string;
  label?: string;
}

export function LogoLink({ href = "/", label = "R2N" }: LogoLinkProps) {
  return (
    <Link
      href={href}
      aria-label="Go to home"
      className="font-logo text-[2rem] leading-none tracking-[0.05em] text-primary select-none hover:text-primary-hover focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      {label}
    </Link>
  );
}
