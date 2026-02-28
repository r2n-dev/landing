import React from "react";
import styles from "./Stack.module.scss";

type StackDirection = "row" | "column";
type StackGap = "xs" | "sm" | "md" | "lg" | "xl";

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: StackDirection;
  gap?: StackGap;
  align?: React.CSSProperties["alignItems"];
  justify?: React.CSSProperties["justifyContent"];
  wrap?: React.CSSProperties["flexWrap"];
};

export const Stack: React.FC<StackProps> = ({
  children,
  className = "",
  direction = "column",
  gap = "md",
  align,
  justify,
  wrap,
  style,
  ...props
}) => {
  const gapClassBySize = {
    xs: styles.gapXS,
    sm: styles.gapSM,
    md: styles.gapMD,
    lg: styles.gapLG,
    xl: styles.gapXL,
  };

  return (
    <div
      {...props}
      className={[
        styles.stack,
        direction === "row" ? styles.row : styles.column,
        gapClassBySize[gap],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
