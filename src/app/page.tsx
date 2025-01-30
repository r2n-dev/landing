import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.left}>
          <p>Hello, i'm</p>
          <h1>Andres Artunduaga</h1>
          <p>Frontend Developer</p>
        </div>
        <div className={styles.right}>

        </div>
      </section>
    </main>
  );
}
