// pages/releases/[id].js
import React from 'react';
import Header from '../../components/Header.js';
import styles from '../../styles/releasePage.module.css';
import releases from '../../lib/releases';

export default function ReleasePage({ release }) {
  if (!release) return <div>Release not found.</div>;

  return (
    <div>
      <Header />
      <main className={styles.container}>
        <img src={release.image} alt={release.title} className={styles.artwork} />
        <div className={styles.details}>
          <h1 className={styles.title}>
            {release.catalogue}: {release.title}
          </h1>
          <h2 className={styles.artist}>{release.artist}</h2>
          <p className={styles.format}>Format: {release.format}</p>
          <p className={styles.date}>Released: {release.releaseDate}</p>
          <p className={styles.credits}>{release.credits}</p>

          <audio controls className={styles.audio}>
            <source src={release.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </main>
    </div>
  );
}

// Static Paths for each release
export async function getStaticPaths() {
  const paths = Object.keys(releases).map((id) => ({
    params: { id },
  }));

  return { paths, fallback: false };
}

// Static Props to get data for each release
export async function getStaticProps({ params }) {
  const release = releases[params.id] || null;

  return {
    props: { release },
  };
}
