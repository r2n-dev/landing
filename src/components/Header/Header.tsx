import React from "react";
import styles from "./Header.module.scss";
import { Logo } from "@/components";

export const Header: React.FC = () => {
  return <header className={styles.header}>
    <Logo />
  </header>;
};
