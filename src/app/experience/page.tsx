import React from "react";
import { Card, Timeline } from "@/components";
import styles from "./experience.module.scss";
import { experienceItems } from "./experience.helpers";

export const Experience: React.FC = () => {
  return (
    <div className={styles.experience}>
      <Card
        className={styles.card}
        header={<h4 className={styles.title}>Experience</h4>}
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
              >📆 {item.date}</small>
              <p style={{
                marginTop: "10px",
                textAlign: "justify",
              }} dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
        />
      </Card>
    </div>
  );
};

export default Experience;
