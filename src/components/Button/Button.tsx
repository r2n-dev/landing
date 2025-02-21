import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "outline";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  size = "medium",
  variant = "default",
}) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${variant === "outline" ? styles.outline : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};