import React from "react";
import styles from "./Card.module.scss";

type CardProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  elevation?: 0 | 1 | 2 | 3;
};

export const Card: React.FC<CardProps> = ({
  header,
  children,
  footer,
  className = "",
  elevation = 1,
}) => {
  return (
    <article
      className={[styles.card, className].filter(Boolean).join(" ")}
      data-elevation={elevation}
    >
      {header ? <header className={styles.header}>{header}</header> : null}
      <div className={styles.content}>{children}</div>
      {footer ? <footer className={styles.footer}>{footer}</footer> : null}
    </article>
  );
};
