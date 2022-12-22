import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./header.module.css";

function Header() {
  const { asPath } = useRouter();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <span style={{ color: asPath === "/" ? "#fff" : "#000" }}>
            switch
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
