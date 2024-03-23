'use server';

import Header from './components/Header';
import MealCard from './components/MealCard';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Meal {
    id: number;
    mainTitle: string;
    secondaryTitle: string;
    imagePath: string;
    tags: string[];
    ingredients: string[];
    notes: string;
}

async function fetchMeals() {
  const meals = await prisma.meal.findMany();
  return meals;
}

async function saveNotes(id: number, notes: string): Promise<void> {
  "use server";

  try {
      await prisma.meal.update({
          where: {
              id: id,
          },
          data: {
              notes: notes,
          },
      });
      console.log('Notes saved successfully.');
  } catch (error) {
      console.error('Error saving notes:', error);
  }
}

async function saveNewMeal(meal: Meal): Promise<void> { 
  'use server';

  try {
      await prisma.meal.create({
          data: {
              mainTitle: meal.mainTitle,
              secondaryTitle: meal.secondaryTitle,
              // todo: add image path
              imagePath: '/Mac-and-Cheese.webp',
              tags: meal.tags,
              ingredients: meal.ingredients,
              notes: meal.notes,
          },
      });
      console.log('New meal saved successfully.');
  } catch (error) {
      console.error('Error saving new meal:', error);
  }
}

export default async function Home() {
  const meals = await fetchMeals();

  return (
   <main className='flex flex-col justify-center'>
    <div className='flex justify-center mb-8 mt-3'>
      <Header saveNewMeal={saveNewMeal} />
    </div>
    <div className="flex justify-center">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {meals.map((meal) => <MealCard key={meal.id} meal={meal} saveNotes={saveNotes} />)} 
      </div>
    </div>
   </main>
  )
}