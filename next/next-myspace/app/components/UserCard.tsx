import Link from 'next/link'
import Image from 'next/image'

interface Props {
  id: string
  name: string | null
  age: number | null
  image: string | null
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div>
      <Image
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
        width={40}
        height={40}
      />
      <div>
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  )
}
