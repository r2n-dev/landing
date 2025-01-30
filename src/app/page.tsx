import Image from "next/image";
import styles from "./page.module.scss";

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
        </div>
      </section>
    </main>
  );
}
