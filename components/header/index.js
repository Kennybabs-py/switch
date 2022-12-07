import React from "react";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span>switch</span>
      </div>
    </header>
  );
}

export default Header;
