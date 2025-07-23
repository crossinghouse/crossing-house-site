import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>Crossing House</h1>
          <nav className={styles.nav}>
            <a href="/releases">Releases</a>
            <a href="/radio">Radio</a>
            <a href="/artists">Artists</a>
            <a href="/about">About</a>
            <a
              href="mailto:general@crossinghouse.com.au"
              className={styles.emailLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </nav>
        </div>
        <div className={styles.heroRight}>
          <img src="/logo.png" alt="Crossing House Logo" className={styles.logo} />
        </div>
      </div>

      {/* Placeholder for mailing list section */}
      <div className={styles.mailingListSection}>
        {/* We can build this out next */}
      </div>
    </div>
  );
}
