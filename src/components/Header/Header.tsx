import React from "react";
import styles from "./Header.module.scss";
import { Logo } from "../Logo/Logo";
import { ThemeSwitcher } from "@/design-system/components";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" aria-label="Go to homepage">
          <Logo size="large" />
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/design-system">Design System</Link>
        </nav>

        <ThemeSwitcher />
      </div>
    </header>
  );
};
