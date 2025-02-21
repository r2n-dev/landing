import React from "react";
import styles from "./Card.module.scss";

type CardProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const Card: React.FC<CardProps> = ({ header, children, footer, className, style }) => {
  return (
    <div className={`${styles.card} ${className || ''}`} style={style}>
      {header && <div className={styles.header}>{header}</div>}
      <div className={styles.content}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};