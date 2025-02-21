import React from "react";
import styles from "./Header.module.scss";
import { Logo } from "@/components";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo size="large" />
      </Link>
    </header>
  );
};
