import React from "react";
import { Card } from "@/components";
import styles from "./experience.module.scss";

export const About: React.FC = () => {
  return (
    <div className={styles.experience}>
      <Card
        className={styles.card}
        header={<h4 className={styles.title}>Experience</h4>}
      >
        Timeline
      </Card>
    </div>
  );
};

export default About;