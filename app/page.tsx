import { link } from 'fs';
import MealCard from './components/MealCard'

interface Meal {
  id: number;
  mainTitle: string;
  secondaryTitle: string;
  image: string;
  tags: string[];
  ingredients: string[];
  notes: string[];
}

export default function Home() {
  const meals = [] as Meal[];
  meals.push(
    {
      id: 1,
      mainTitle: 'Mac and Cheese',
      secondaryTitle: 'baked with asparagus and breadcrumbs',
      image: '/Mac-and-Cheese.webp',
      tags: ['vegetarian', 'dinner', 'lunch'],
      ingredients: ['macaroni', 'cheese', 'asparagus', 'breadcrumbs'],
      notes: ['use a lot of cheese'],
    }
  );

  return (
   <main>
      {meals.map(meal => <MealCard meal={meal} />)}
   </main>
  )
}
