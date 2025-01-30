import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.left}>
          <Image
            src={`/undraw/undraw_version-control_eiam.svg`}
            alt="hero-image"
            width={300}
            height={300}
          ></Image>
        </div>
        <div className={styles.right}>
          <p>Hello, I&apos;m</p>
          <h1>Andres Artunduaga</h1>
          <p>Frontend Developer</p>
          <div className={styles.links}>
            <div className={styles.link}>
              <Link
                href="https://www.linkedin.com/in/andres-artunduaga/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
