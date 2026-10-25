import Link from "next/link";

interface LogoLinkProps {
  href?: string;
  label?: string;
  homeLabel?: string;
}

export function LogoLink({ href = "/", label = "R2N", homeLabel = "home" }: LogoLinkProps) {
  return (
    <Link
      href={href}
      aria-label={`${label}, ${homeLabel}`}
      className="font-logo text-[2rem] leading-none tracking-[0.05em] text-primary select-none hover:text-primary-hover focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      {label}
    </Link>
  );
}
