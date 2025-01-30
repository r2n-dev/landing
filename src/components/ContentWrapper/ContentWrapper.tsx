import React, { FC, PropsWithChildren } from "react";
import styles from "./ContentWrapper.module.scss";

interface ContentWrapperProps {}

const ContentWrapper: FC<PropsWithChildren<ContentWrapperProps>> = ({
  children,
}) => {
  return <div className={styles.contentWrapper}>{children}</div>;
};

export default ContentWrapper;
