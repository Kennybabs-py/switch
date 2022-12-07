import Link from "next/link";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <span>switch</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
