import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* TOP BAR */}
      <div className={styles.topBar}>
        {/* Left icon */}
        <div className={styles.left}>
          <span className={styles.brandIcon}>✳</span>
        </div>

        {/* Center logo */}
        <div className={styles.center}>
          <span className={styles.logo}>LOGO</span>
        </div>

        {/* Right icons */}
        <div className={styles.right}>
          <span>🔍</span>
          <span>♡</span>
          <span>👜</span>
          <span>👤</span>
          <span className={styles.lang}>ENG ▾</span>
        </div>
      </div>

      {/* NAV */}
      <nav className={styles.nav}>
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
}
