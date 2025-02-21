import React from "react";
import styles from "./about.module.scss";
import { Card } from "@/components";

export const About: React.FC = () => {
  return (
    <Card
      className={styles.about}
      header={<h4 className={styles.title}>About Me</h4>}
    >
      <p>
        I&apos;m a frontend developer with over seven years of experience crafting
        scalable and user-friendly web applications. My expertise lies in modern
        JavaScript frameworks like React and Angular, along with TypeScript, and
        I&apos;m passionate about building seamless user experiences through design
        systems and reusable components. I thrive in collaborative, agile
        environments, leveraging tools like Git and RESTful APIs to deliver
        high-quality solutions. I&apos;m constantly learning and exploring new
        technologies to stay at the forefront of frontend development, and I&apos;m
        driven by a desire to create impactful and engaging web experiences.
      </p>
    </Card>
  );
};

export default About;
