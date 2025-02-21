import React from "react";
import { NextPage } from "next";
import { Button, Card, Timeline } from "@/components";
import styles from "./experience.module.scss";
import { experienceItems } from "./experience.helpers";

const Experience: NextPage = () => {
  return (
    <div className={styles.experience}>
      <Card
        className={styles.card}
        header={
          <div className={styles.title}>
            <h4>Experience</h4>
            <Button
              linkProps={{
                href: "https://www.linkedin.com/in/andres-artunduaga/",
                target: "_blank",
              }}
            >
              LinkedIn
            </Button>
          </div>
        }
      >
        <Timeline
          items={experienceItems.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <h6>{item.title}</h6>
              <span
                style={{
                  display: "flex",
                  gap: "10px",
                  fontWeight: "bold",
                }}
              >
                <small>🏢 {item.company}</small>
                <small>📍 {item.location}</small>
              </span>
              <small
                style={{
                  fontWeight: "bold",
                }}
              >
                📆 {item.date}
              </small>
              <p
                style={{
                  marginTop: "10px",
                  textAlign: "justify",
                }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        />
      </Card>
    </div>
  );
};

export default Experience;
