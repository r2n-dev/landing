import React from "react";
import styles from "./Logo.module.scss";
import { audiowide } from "@/app/fonts";

type LogoProps = {
  size?: "small" | "medium" | "large";
};

export const Logo: React.FC<LogoProps> = ({ size = "medium" }) => {
    console.log(size);
  return (
    <div className={`${audiowide.className} ${styles.logo} ${styles[size]}`}>
      R2N
    </div>
  );
};
