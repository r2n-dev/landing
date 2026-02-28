import React from "react";
import styles from "./Container.module.scss";

type ContainerSize = "sm" | "md" | "lg" | "xl";
type ContainerPadding = "sm" | "md" | "lg";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
  padding?: ContainerPadding;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "lg",
  padding = "md",
  ...props
}) => {
  const sizeClass = {
    sm: styles.sizeSM,
    md: styles.sizeMD,
    lg: styles.sizeLG,
    xl: styles.sizeXL,
  };

  const paddingClass = {
    sm: styles.paddingSM,
    md: styles.paddingMD,
    lg: styles.paddingLG,
  };

  return (
    <div
      {...props}
      className={[
        styles.container,
        sizeClass[size],
        paddingClass[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};
