import React from "react";
import {
  Button,
  Card,
  Container,
  Stack,
  Text,
  ThemeSwitcher,
} from "@/components";
import { THEME_OPTIONS } from "@/design-system/theme";
import styles from "./page.module.scss";

const semanticColorTokens = [
  "--color-bg-canvas",
  "--color-bg-surface",
  "--color-bg-elevated",
  "--color-text-primary",
  "--color-text-secondary",
  "--color-border-default",
  "--color-accent",
  "--color-accent-hover",
];

export default function DesignSystemPage() {
  return (
    <section className={styles.page}>
      <Container size="xl" padding="lg">
        <Stack gap="xl">
          <header className={styles.header}>
            <Stack gap="sm">
              <Text variant="label" tone="accent">
                Living Documentation
              </Text>
              <Text variant="h2">Design System</Text>
              <Text variant="body" tone="muted">
                Tokens, primitives, and runtime themes used by this portfolio.
              </Text>
            </Stack>
            <ThemeSwitcher />
          </header>

          <Card
            elevation={2}
            header={<Text variant="h5">Theme Catalog</Text>}
          >
            <ul className={styles.themeList}>
              {THEME_OPTIONS.map((theme) => (
                <li key={theme.name} className={styles.themeItem}>
                  <Text variant="label" tone="muted">
                    {theme.appearance}
                  </Text>
                  <Text variant="h6">{theme.label}</Text>
                  <Text variant="small" tone="muted">
                    {theme.name}
                  </Text>
                </li>
              ))}
            </ul>
          </Card>

          <Card
            elevation={2}
            header={<Text variant="h5">Semantic Tokens</Text>}
          >
            <div className={styles.swatchGrid}>
              {semanticColorTokens.map((token) => (
                <div key={token} className={styles.swatchCard}>
                  <div className={styles.swatchColor} data-token={token} aria-hidden />
                  <Text variant="small">{token}</Text>
                </div>
              ))}
            </div>
          </Card>

          <Card
            elevation={2}
            header={<Text variant="h5">Typography</Text>}
          >
            <Stack gap="sm">
              <Text variant="display">Display sample text</Text>
              <Text variant="h2">Heading level two sample</Text>
              <Text variant="h4">Heading level four sample</Text>
              <Text variant="body">Body text sample for content paragraphs.</Text>
              <Text variant="small" tone="muted">
                Small text sample for metadata.
              </Text>
            </Stack>
          </Card>

          <Card
            elevation={2}
            header={<Text variant="h5">Buttons</Text>}
          >
            <Stack direction="row" wrap="wrap" gap="sm">
              <Button variant="solid">Solid</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
            </Stack>
          </Card>

          <Card
            elevation={2}
            header={<Text variant="h5">Spacing Preview</Text>}
          >
            <div className={styles.spacingGrid}>
              {[
                "--space-2",
                "--space-3",
                "--space-4",
                "--space-5",
                "--space-7",
                "--space-9",
              ].map((token) => (
                <div key={token} className={styles.spacingItem}>
                  <Text variant="small">{token}</Text>
                  <div className={styles.spacingBar} data-space={token} />
                </div>
              ))}
            </div>
          </Card>
        </Stack>
      </Container>
    </section>
  );
}
