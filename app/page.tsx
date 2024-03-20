import MealCard from './components/MealCard';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function fetchMeals() {
  const meals = await prisma.meal.findMany();
  return meals;
}

export default async function Home() {
  const meals = await fetchMeals();

  return (
   <main>
      {meals.map(meal => <MealCard meal={meal} />)}
   </main>
  )
}
