import Image from "next/image";
import styles from "./page.module.scss";
import { Button, Container, Stack, Text } from "@/components";

export default function Home() {
  return (
    <main className={styles.home}>
      <Container size="xl" padding="lg">
        <section className={styles.hero}>
          <div className={styles.left}>
            <Image
              src="https://andres-artunduaga.github.io/resume/assets/Andres.png"
              alt="Andres Artunduaga"
              width={320}
              height={320}
              className={styles.image}
              priority
            />
          </div>

          <Stack className={styles.right} gap="md">
            <Text variant="label" tone="accent">
              Frontend Engineer
            </Text>
            <Text variant="display">Andres Artunduaga</Text>
            <Text variant="body" tone="muted">
              I build scalable UI architectures, reusable components, and high-quality user experiences.
            </Text>
            <Stack direction="row" gap="sm" wrap="wrap">
              <Button href="/about">About Me</Button>
              <Button href="/experience" variant="outline">
                Experience
              </Button>
              <Button
                href="https://www.linkedin.com/in/andres-artunduaga/"
                target="_blank"
                rel="noreferrer"
                variant="ghost"
              >
                LinkedIn
              </Button>
            </Stack>
          </Stack>
        </section>
      </Container>
    </main>
  );
}
