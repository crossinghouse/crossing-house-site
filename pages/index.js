import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Crossing House</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Crossing House</h1>
          <nav className={styles.nav}>
            <ul>
              <li>Releases</li>
              <li>Artists</li>
              <li>Radio</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className={styles.logoWrapper}>
            <Image
  src="/logo.png"
  alt="Crossing House Logo"
  fill
  style={{ objectFit: 'contain' }}
  priority
/>

          </div>
        </section>

        <section className={styles.about}>
          <p>
            Crossing House is an artist-led open network dedicated to empowering artists and uplifting the community
            that is thriving in Melbourne. This initiative was born out of the necessity for a platform that fosters
            connection within the creative community beyond casual collaboration and friendship. Crossing House aims
            to facilitate the sharing of art across Melbourne’s diverse creative landscape, celebrating talent across
            all mediums and genres.
          </p>
          <p>
            At Crossing House, community and empowerment drive the mission. We are committed to elevating the community
            through individual and collaborative efforts, cultivating collective growth and support in the creative
            industry. Crossing House aims to involve a network of multi-disciplinary creators—spanning all creative
            fields and mediums—who will embrace and uphold these fundamental principles. Through a variety of digital
            and in-person experiences such as music releases, gigs, exhibitions, publications and residencies, Crossing
            House provides the foundation for such creative endeavours to flourish, be shared and be experienced by all.
          </p>
        </section>

        <section className={styles.mailingList}>
          <input type="email" placeholder="Enter your email" />
          <button>Join Mailing List</button>
        </section>
      </main>
    </>
  )
}
