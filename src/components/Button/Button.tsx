import React from "react";
import styles from "./Button.module.scss";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "outline";
  linkProps?: React.ComponentProps<typeof Link>; 
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  size = "medium",
  variant = "default",
  linkProps,

}) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${
        variant === "outline" ? styles.outline : ""
      } ${className}`}
      onClick={onClick}
    >
      {linkProps ? <Link {...linkProps}>{children}</Link> : children}
    </button>
  );
};
