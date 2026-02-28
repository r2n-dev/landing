import { Container, Group } from "@mantine/core";
import type { LandingLocale } from "@/components/landing/i18n";
import { ColorSchemeToggle } from "@/components/theme/ColorSchemeToggle";
import { LanguageSelector } from "@/components/theme/LanguageSelector";
import type { LandingControlCopy } from "../landing.types";
import styles from "./PageHeader.module.scss";

interface PageHeaderProps {
  locale: LandingLocale;
  controls: LandingControlCopy;
  onLocaleChange: (locale: LandingLocale) => void;
}

export function PageHeader({ locale, controls, onLocaleChange }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <Container size="lg">
        <Group justify="space-between" align="center">
          <div className={styles.logo}>R2N</div>
          <Group gap="xs" wrap="nowrap">
            <LanguageSelector
              value={locale}
              ariaLabel={controls.languageSelectorLabel}
              onChange={onLocaleChange}
            />
            <ColorSchemeToggle labels={controls} />
          </Group>
        </Group>
      </Container>
    </header>
  );
}
