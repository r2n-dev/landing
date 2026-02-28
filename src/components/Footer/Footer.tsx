import React from "react";
import styles from "./Footer.module.scss";
import { Container, Text } from "@/design-system/components";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container size="xl" padding="md" className={styles.inner}>
        <Text variant="small" tone="muted">
          © {year} Andres Artunduaga. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
};
