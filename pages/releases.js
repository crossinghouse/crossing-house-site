
import styles from '../styles/Releases.module.css'
import Link from 'next/link'

const releases = [
  { id: 'ch006', artist: 'EIS', title: 'Digital EP', cover: '/cover1.jpg' },
  { id: 'ch005', artist: 'Jonah Gabriel', title: 'Modular Works', cover: '/cover2.jpg' },
  { id: 'ch004', artist: 'RobLFO', title: 'Deep Cuts', cover: '/cover3.jpg' },
]

export default function Releases() {
  return (
    <div className={styles.grid}>
      {releases.map(release => (
        <Link key={release.id} href={`/releases/${release.id}`} className={styles.tile}>
          <div className={styles.cover} style={{ backgroundImage: `url(${release.cover})` }}>
            <div className={styles.overlay}>
              <p>{release.artist} – {release.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
