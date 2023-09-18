import Link from 'next/link'
import Image from 'next/image'

export default function NavMenu() {
  return (
    <nav className="flex h-20 justify-between items-center bg-blue-500">
      <Link href="/">
        <Image src="/logo.svg" width={216} height={30} alt="NextSpace logo" />
      </Link>
      <ul className="list-none flex mr-4">
        <li className="h-20 flex items-center p-1 text-white font-bold">
          <Link href="/about">About</Link>
        </li>
        <li className="h-20 flex items-center p-1 text-white font-bold">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="h-20 flex items-center p-1 text-white font-bold">
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  )
}
