import Link from "next/link";
import { Anchor } from "@mantine/core";
import styles from "./LogoLink.module.scss";

interface LogoLinkProps {
  href?: string;
  label?: string;
}

export function LogoLink({ href = "/", label = "R2N" }: LogoLinkProps) {
  return (
    <Anchor
      component={Link}
      href={href}
      underline="never"
      className={styles.logo}
      aria-label="Go to home"
    >
      {label}
    </Anchor>
  );
}
