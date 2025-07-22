import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-48 min-h-screen p-6 border-r border-black">
      <ul className="space-y-4 text-lg font-sans">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/releases">Releases</Link></li>
        <li><Link href="/radio">Radio</Link></li>
        <li><Link href="/artists">Artists</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
