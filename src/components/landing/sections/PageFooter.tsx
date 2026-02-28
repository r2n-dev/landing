import { Anchor, Container, Group, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconHeart,
  IconMail,
} from "@tabler/icons-react";
import styles from "./PageFooter.module.scss";

interface PageFooterProps {
  name: string;
  email: string;
  linkedinHref: string;
  githubHref: string;
  whatsappHref: string;
  madeWithLabel: string;
  inCountryLabel: string;
}

export function PageFooter({
  name,
  email,
  linkedinHref,
  githubHref,
  whatsappHref,
  madeWithLabel,
  inCountryLabel,
}: PageFooterProps) {
  return (
    <footer className={styles.footer}>
      <Container size="lg">
        <Group justify="space-between" align="center" wrap="wrap">
          <Text size="sm" c="dimmed" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {name}
          </Text>
          <Group gap="md">
            <Anchor href={`mailto:${email}`} c="dimmed" size="sm" className={styles.link}>
              <IconMail size={16} />
              <span>{email}</span>
            </Anchor>
            <Anchor href={linkedinHref} target="_blank" rel="noreferrer" c="dimmed" size="sm" className={styles.link}>
              <IconBrandLinkedin size={16} />
              <span>LinkedIn</span>
            </Anchor>
            <Anchor href={githubHref} target="_blank" rel="noreferrer" c="dimmed" size="sm" className={styles.link}>
              <IconBrandGithub size={16} />
              <span>GitHub</span>
            </Anchor>
            <Anchor href={whatsappHref} target="_blank" rel="noreferrer" c="dimmed" size="sm" className={styles.link}>
              <IconBrandWhatsapp size={16} />
              <span>WhatsApp</span>
            </Anchor>
          </Group>
          <Group gap={4} wrap="nowrap">
            <Text size="xs" c="dimmed">{madeWithLabel}</Text>
            <IconHeart size={14} color="var(--mantine-color-dimmed)" />
            <Text size="xs" c="dimmed">{inCountryLabel}</Text>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
