import React from "react";
import { Button, Card, Container, Text, Timeline } from "@/components";
import styles from "./experience.module.scss";
import { experienceItems } from "./experience.helpers";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <Container size="xl" padding="md">
        <Card
          className={styles.card}
          elevation={2}
          header={
            <div className={styles.title}>
              <Text variant="h4">Experience</Text>
              <Button
                href="https://www.linkedin.com/in/andres-artunduaga/"
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="sm"
              >
                LinkedIn
              </Button>
            </div>
          }
        >
          <Timeline
            items={experienceItems.map((item) => (
              <article key={`${item.company}-${item.date}`} className={styles.timelineItem}>
                <Text variant="h6">{item.title}</Text>
                <div className={styles.meta}>
                  <Text variant="small" tone="muted">
                    {item.company}
                  </Text>
                  <Text variant="small" tone="muted">
                    {item.location}
                  </Text>
                  <Text variant="small" tone="accent">
                    {item.date}
                  </Text>
                </div>
                <Text variant="body" tone="muted">
                  {item.description}
                </Text>
              </article>
            ))}
          />
        </Card>
      </Container>
    </section>
  );
};

export default Experience;
