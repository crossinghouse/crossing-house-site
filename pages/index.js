
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crossing House</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Crossing House</h1>
        <nav className={styles.menu}>
          <a href="/releases">Releases</a>
          <a href="/radio">Radio</a>
          <a href="/artists">Artists</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <p className={styles.about}>
          Crossing House is an artist-led open network dedicated to empowering artists and uplifting the community that is thriving in Melbourne. This initiative was born out of the necessity for a platform that fosters connection within the creative community beyond casual collaboration and friendship. Crossing House aims to facilitate the sharing of art across Melbourne’s diverse creative landscape, celebrating talent across all mediums and genres.
        </p>
      </main>
    </div>
  )
}
