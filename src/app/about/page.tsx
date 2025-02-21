import React from "react";
import styles from "./about.module.scss";
import { Card } from "@/components";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <Card
      className={styles.about}
      header={<h4 className={styles.title}>About Me</h4>}
    >
      <div className={styles.content}>
        <div className={styles.left}>
          <Image
            src={`https://andres-artunduaga.github.io/resume/assets/Andres.png`}
            alt="Andres Artunduaga Photo"
            width={300}
            height={300}
            className={styles.image}
          ></Image>
        </div>
        <p className={styles.text}>
          I&apos;m a frontend developer with 7+ years of experience building
          scalable and user-friendly web applications. I specialize in React,
          Angular, and TypeScript, and I&apos;m passionate about creating
          seamless user experiences through design systems and reusable
          components. I thrive in collaborative, agile environments and love
          exploring new technologies.
        </p>
      </div>
    </Card>
  );
};

export default About;
