import React from 'react';
import Header from '../components/Header';
import styles from '../styles/releases.module.css';

const releases = [
  {
    id: '001',
    artist: 'EIS',
    title: 'EIS',
    image: '/artwork/ch001.jpg',
  },
  {
    id: '007',
    artist: 'SHOCK CORRIDOR',
    title: 'Drag Nets',
    image: '/artwork/ch007.jpg',
  },
  {
    id: '008',
    artist: 'ZACHARY LEWIS',
    title: 'Zachary Lewis',
    image: '/artwork/ch008.png',
  },
  {
    id: '009',
    artist: 'THE DAILY COMMUTERS',
    title: 'QUANTIFY/MUNCHKIN',
    image: '/artwork/ch009.jpg',
  },
  {
    id: '006',
    artist: 'DAMIAN CARL',
    title: 'Space Junk Stones Throw',
    image: '/artwork/ch006.jpg',
  },
];

export default function Releases() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        {releases.map((release) => (
          <a key={release.id} href={`/releases/${release.id}`} className={styles.releaseItem}>
            <img src={release.image} alt={release.title} className={styles.artwork} />
            <div className={styles.text}>
              <div className={styles.textRow}>
                <h3 className={styles.artist}>{release.artist}</h3>
                <span className={styles.catalogue}>{release.id.toUpperCase()}</span>
              </div>
              <p className={styles.title}>{release.title}</p>
            </div>
          </a>
        ))}
      </main>
    </div>
  );
}
