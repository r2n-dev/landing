import React, { FC, PropsWithChildren } from "react";
import styles from "./PageWrapper.module.scss";

interface PageWrapperProps {}

const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({
  children,
}) => {
  return <div className={styles.PageWrapper}>{children}</div>;
};

export default PageWrapper;
