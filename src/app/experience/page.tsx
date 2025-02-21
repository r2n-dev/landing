import React from "react";
import { Card, Timeline } from "@/components";
import styles from "./experience.module.scss";


export const Experience: React.FC = () => {
  const experienceItems = [
    {
      date: "2019 - Present",
      title: "Software Engineer",
      description:
        "Developed and maintained web applications using React, Angular, and Node.js.",
    },
    {
      date: "2016 - 2019",
      title: "Frontend Developer",
      description: "Built responsive websites using HTML, CSS, and JavaScript.",
    },
    {
      date: "2014 - 2016",
      title: "Web Designer",
      description:
        "Designed user interfaces and experiences for web applications.",
    },
  ];

  return (
    <div className={styles.experience}>
      <Card
        className={styles.card}
        header={<h4 className={styles.title}>Experience</h4>}
      >
        <Timeline
          items={experienceItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: index % 2 === 1 ? "flex-start" : "flex-end",
                padding: "1rem",
              }}
            >
              <h5>{item.date}</h5>
              <h6>{item.title}</h6>
              <p
                style={{
                  textAlign: index % 2 === 1 ? "left" : "right",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        />
      </Card>
    </div>
  );
};

export default Experience;
