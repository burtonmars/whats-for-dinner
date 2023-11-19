import Link from 'next/link'
import MealCard from './components/MealCard'

export default function Home() {
  return (
   <main>
    <Link href="/users">users</Link>
    <MealCard />
   </main>
  )
}
