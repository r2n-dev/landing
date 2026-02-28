import React from "react";
import styles from "./Text.module.scss";

type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "small"
  | "label";

type TextTone = "default" | "muted" | "accent" | "inverse";

type ElementByVariant = {
  display: "h1";
  h1: "h1";
  h2: "h2";
  h3: "h3";
  h4: "h4";
  h5: "h5";
  h6: "h6";
  body: "p";
  small: "small";
  label: "span";
};

type TextProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  variant?: TextVariant;
  tone?: TextTone;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const defaultElementByVariant: ElementByVariant = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  small: "small",
  label: "span",
};

export const Text = <T extends React.ElementType = "p">({
  as,
  children,
  className = "",
  variant = "body",
  tone = "default",
  ...props
}: TextProps<T>) => {
  const Component = as ?? defaultElementByVariant[variant];

  return (
    <Component
      {...props}
      className={[styles.text, styles[variant], styles[tone], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
};
