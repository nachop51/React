import { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
}

export default async function About() {
  return (
    <main>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis eaque
        adipisci ullam, assumenda voluptatem officia esse. Officia doloremque
        aliquid itaque aspernatur animi quia ratione possimus laboriosam tempora
        maiores, voluptatum cumque.
      </p>
    </main>
  )
}
