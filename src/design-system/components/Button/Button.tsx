import Link from "next/link";
import React from "react";
import styles from "./Button.module.scss";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "solid" | "outline" | "ghost";

type BaseButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

type ButtonAsLinkProps = BaseButtonProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  size = "md",
  variant = "solid",
  fullWidth = false,
  ...props
}) => {
  const classNames = [
    styles.button,
    styles[size],
    styles[variant],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && typeof props.href === "string") {
    return (
      <Link {...props} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" {...props} className={classNames}>
      {children}
    </button>
  );
};
