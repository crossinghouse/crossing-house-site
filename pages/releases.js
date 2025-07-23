import React from 'react';
import Header from '../components/Header';
import styles from '../styles/releases.module.css';

const releases = [
  {
    id: 'ch005',
    artist: 'Jonah Gabriel',
    title: 'Modular Works',
    image: '/artwork/ch005.jpg', // Add this image to /public/artwork
  },
  {
    id: 'ch004',
    artist: 'Damian Carl & The Quaaludes',
    title: 'Live from the Quarter',
    image: '/artwork/ch004.jpg', // Add this image to /public/artwork
  },
  {
    id: 'ch003',
    artist: 'RobLFO',
    title: 'Underpass',
    image: '/artwork/ch003.jpg',
  },
  {
    id: 'ch002',
    artist: 'Sikluh',
    title: 'Foam Folder',
    image: '/artwork/ch002.jpg',
  },
  {
    id: 'ch001',
    artist: 'Jonah Gabriel',
    title: 'Garden Pieces',
    image: '/artwork/ch001.jpg',
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
              <h3>{release.artist}</h3>
              <p>{release.title}</p>
            </div>
          </a>
        ))}
      </main>
    </div>
  );
}
