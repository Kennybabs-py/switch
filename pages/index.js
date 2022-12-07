import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Welcome to Switch</h1>

        <p>E-commerce at it's finest.</p>

        <div className={styles.view_button}>
          <Link href="/products">View products</Link>
        </div>
      </div>
    </main>
  );
}
