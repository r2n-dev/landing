import React, { FC, PropsWithChildren } from "react";
import styles from "./PageWrapper.module.scss";

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.pageWrapper}>{children}</div>;
};
