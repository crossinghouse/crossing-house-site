import Head from 'next/head'
import Navbar from '../components/Navbar'
import CustomPlayer from '../components/CustomPlayer'

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] text-black min-h-screen flex">
      <Head>
        <title>Crossing House</title>
        <meta name="description" content="Crossing House Record Label" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-1 p-8">
        <h1 className="text-6xl font-bold mb-12 font-sans">Crossing House</h1>
        <p className="text-lg max-w-xl leading-relaxed">
          Crossing House is an artist-led record label presenting experimental, improvised, and boundary-pushing music.
          Based in Australia and connecting with global underground communities.
        </p>
        <div className="mt-16">
          <CustomPlayer />
        </div>
      </main>
    </div>
  )
}
