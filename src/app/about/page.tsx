import React from "react";
import Image from "next/image";
import { Button, Card, Container, Stack, Text } from "@/components";
import styles from "./about.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <Container size="lg" padding="md">
        <Card
          className={styles.card}
          elevation={2}
          header={
            <div className={styles.title}>
              <Text variant="h4">About Me</Text>
              <Button href="/experience" variant="outline" size="sm">
                Check my experience
              </Button>
            </div>
          }
        >
          <div className={styles.content}>
            <div className={styles.left}>
              <Image
                src="https://andres-artunduaga.github.io/resume/assets/Andres.png"
                alt="Andres Artunduaga"
                width={300}
                height={300}
                className={styles.image}
              />
            </div>
            <Stack className={styles.right} gap="sm">
              <Text variant="body" tone="muted">
                I am a frontend developer with 7+ years of experience building
                scalable and user-friendly web applications. I specialize in
                React, Angular, and TypeScript, and I am passionate about
                creating seamless user experiences through design systems and
                reusable components.
              </Text>
              <Text variant="body" tone="muted">
                I thrive in collaborative, agile environments and enjoy turning
                product requirements into maintainable interfaces with clear
                design language.
              </Text>
            </Stack>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default About;
