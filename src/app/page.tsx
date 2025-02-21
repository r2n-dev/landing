import Image from "next/image";
import styles from "./page.module.scss";
import { Button } from "@/components";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.left}>
          <Image
            src={`https://andres-artunduaga.github.io/resume/assets/Andres.png`}
            alt="Andres Artunduaga Photo"
            width={300}
            height={300}
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.right}>
          <p>Hello, I&apos;m</p>
          <h1>Andres Artunduaga</h1>
          <p>Frontend Developer</p>
          <div className={styles.links}>
            <Button
              linkProps={{
                href: "/about",
              }}
            >
              About Me
            </Button>
            <Button
              linkProps={{
                href: "/experience",
              }}
            >
              Experience
            </Button>
            <Button
              linkProps={{
                href: "https://www.linkedin.com/in/andres-artunduaga/",
                target: "_blank"
              }}
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
