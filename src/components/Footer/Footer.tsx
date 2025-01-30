import React from "react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className={styles.footer}>
      <p>©{year}. All rights reserved.</p>
    </footer>
  );
};
