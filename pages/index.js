import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Welcome to Switch</h1>

        <div className={styles.view_button}>
          <Link href="/">View products</Link>
        </div>
      </div>
    </main>
  );
}
